import React from 'react';
import ImageUploading from "react-images-uploading";
import Cropper from './cropper'

const maxMbFileSize = 5 * 1024 * 1024; 

export default function Image(){

  return (
    <div className="container">
      <ImageUploading
        maxFileSize={maxMbFileSize}
        acceptType={["jpg", "gif", "png"]}
        resolutionType="absolute"
        resolutionWidth={1024}
        resolutionHeight={1024}
      >
        {({ imageList, onImageUpload, errors}) => {
          return( <div>
            <div className="uploadBtnContainer">
                <button className="sky-blue-Btn" onClick={onImageUpload}>Upload image</button>
                <br/>
                {errors.resolution && <p className="errMessage">Selected file does not match your desired resolution of 1024*1024</p>}
            </div>
            {imageList.map((image) => (
              <div key={image.key}>
                <p>Original Image is scaled down for viewing : 1024 * 1024</p>
                <img src={image.dataURL} alt="" height="400" width="400"/>
                <br/>
                <p>750 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={750} outputHeight={450} />
                <p>365 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={365} outputHeight={450} />
                <p>365 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={365} outputHeight={212} />
                <p>380 * 450</p>
                <Cropper img={image} inputWidth={1024} inputHeight={1024} outputWidth={380} outputHeight={380} />
              </div>
            ))}
          </div>)
        }}
      </ImageUploading>
    </div>
  );
}