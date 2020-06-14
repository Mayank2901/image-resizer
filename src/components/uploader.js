import React, {useEffect, useState} from 'react';
import axios from 'axios'

export default function Uploader(props){

    const [uploading,setUploading] = useState(true)

    const [data, setData] = useState('')

    useEffect(() => {
        axios.post('/3/upload', {
            image: props.image
        })
        .then(function (response) {
            console.log(response.data);
            setData(response.data)
            setUploading(false)
        })
        .catch(function (error) {
            console.log(error.response);
            setData(error.response ? error.response.data : '')
            setUploading(false)
        });
    },[])

    return (
        uploading ?
            <p>Image Uploading</p> 
        :
            data !== '' ?
                data.success ?
                    <p> URL : <a href={data.data.link}>{data.data.link}</a></p>
                :
                    <p className="errMessage">{data.data.error.length > 100 ? (data.data.error.substring(0,100) + '...') : data.data.error}</p>
            :
                ''
    )
}