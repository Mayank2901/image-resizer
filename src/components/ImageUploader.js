import React, { useState, useEffect, useRef } from 'react';
import ImageUploading from "react-images-uploading";
import Cropper from './cropper'

const maxMbFileSize = 5 * 1024 * 1024; 

export default function ImageUploader(){
  const imageRef = useRef(null)

  function onChange(imageList){
    // data for submit
    console.log(imageList);
  };

  return (
    <div className="container">
      <ImageUploading
        onChange={onChange}
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "gif", "png"]}
        resolutionType="absolute"
        resolutionWidth={1024}
        resolutionHeight={1024}
      >
        {({ imageList, onImageUpload, onImageRemoveAll, errors}) => {
          // write your building UI
          console.log('errors',errors)
          return( <div>
            <div className="uploadBtnContainer">
                <button className="uploadBtn" onClick={onImageUpload}>Upload image</button>
                <br/>
                {errors.resolution && <p className="errMessage">Selected file does not match your desired resolution of 1024*1024</p>}
            </div>
            {imageList.map((image) => (
              <div key={image.key}>
                <p>Original Image is scaled down for viewing : 1024 * 1024</p>
                <img src={image.dataURL} alt="" ref={imageRef} height="400" width="400"/>
                <br/>
                <p>750 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={750} outputHeight={450} />
                <p>365 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={365} outputHeight={450} />
                <p>365 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={365} outputHeight={212} />
                <p>380 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={380} outputHeight={380} />
                <p>640 * 480</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={640} outputHeight={640} />
              </div>
            ))}
          </div>)
        }}
      </ImageUploading>
    </div>
  );
}