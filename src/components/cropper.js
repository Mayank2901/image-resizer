import React, { useState, useEffect, useRef } from 'react';

export default function Cropper(props){
    const canvasRef = useRef(null)

    useEffect(() => {
        console.log('props',props)
        var img = new Image;
        img.src = props.img.dataURL;
        const canvasObj = canvasRef.current
        const ctx = canvasObj.getContext('2d')
        const outputX = ((props.outputWidth - props.inputWidth)/2);
        const outputY = ((props.outputHeight - props.inputHeight)/2);
        ctx.drawImage(img,outputX,outputY)
    })

    return (
        <canvas ref={canvasRef} width={props.outputWidth} height={props.outputHeight} />
    )
}