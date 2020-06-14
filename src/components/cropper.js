import React, { useState, useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';
import Uploader from './uploader'

export default function Cropper(props){
    const canvasRef = useRef(null)
    const [upload,setUpload] = useState(false)

    useEffect(() => {
        let img = new Image();
        img.src = props.img.dataURL;
        const canvasObj = canvasRef.current
        const ctx = canvasObj.getContext('2d')
        const outputX = ((props.outputWidth - props.inputWidth)/2);
        const outputY = ((props.outputHeight - props.inputHeight)/2);
        ctx.drawImage(img,outputX,outputY)
    })

    function saveImage(){
        let currentdate = new Date();
        let datetime = currentdate.getDate() + "-" + (currentdate.getMonth() +1)
        + "-" + currentdate.getFullYear() + " @ " 
        + currentdate.getHours() + ":" 
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        saveAs(canvasRef.current.toDataURL("image/jpeg"), (datetime + '_' + props.outputWidth + "*" + props.outputHeight + ".jpeg"));
    }

    return (<div>
            <canvas ref={canvasRef} width={props.outputWidth} height={props.outputHeight} />
            <br/>
            <button className="sky-blue-Btn" onClick={saveImage}>Save</button>
            {
                upload ?
                    <Uploader image={canvasRef.current.toDataURL("image/jpeg").substring(canvasRef.current.toDataURL("image/jpeg").indexOf(','))} />
                :
                    <button className="sky-blue-Btn" onClick={() => setUpload(true)}>Upload</button>
            }
        </div>
    )
}