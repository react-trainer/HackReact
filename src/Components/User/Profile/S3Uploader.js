import React, { Component } from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

class S3Uploader extends Component{
    constructor(){
        super();
        this.state = {
            image: ""
        }
    }

    handleFinishedUpload = info => {
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
      }

    render(){

        const uploadOptions = {
            server: process.env.REACT_APP_SERVER,
            signingUrlQueryParams: {uploadType: 'avatar'},
          }
          const s3Url = `https://geauxfurupload.s3.amazonaws.com`

        return(
        
                <DropzoneS3Uploader
                onFinish={this.handleFinishedUpload}
                s3Url={}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}/>
            
        )
    }

}

export default S3Uploader;

// export const addImage = imageUrl => {
//     return {
//       type: ADD_IMAGE,
//       payload: axios.post("/api/image", { imageUrl })
//     };
//   };