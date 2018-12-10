<<<<<<< HEAD
import React, { Component } from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import {withRouter} from 'react-router-dom'


class S3Uploader extends Component{
    constructor(){
        super();
        this.state = {
            image_url: ""
        }
    }

    handleFinishedUpload = info => {
        // console.log('File uploaded with filename', info.filename)
        // console.log('Access it on s3 at', info.fileUrl)
        this.props.updateImage(this.props.user_id, info.fileUrl);
      }

    render(){
        console.log(this.props.match)
        const uploadOptions = {
            server: process.env.REACT_APP_CLIENT,
            signingUrlQueryParams: {uploadType: 'avatar'},
          }
          const s3Url = `https://hackreact.s3.amazonaws.com`

        return(
        
                <DropzoneS3Uploader
                onFinish={this.handleFinishedUpload}
                s3Url={s3Url}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}/>
            
        )
    }

=======
import React, { Component } from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

class S3Uploader extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
  }

  handleFinishedUpload = info => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
  };

  render() {
    const uploadOptions = {
      server: process.env.REACT_APP_SERVER,
      signingUrlQueryParams: { uploadType: "avatar" }
    };
    const s3Url = `https://geauxfurupload.s3.amazonaws.com`;

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
>>>>>>> master
}

export default withRouter(S3Uploader);

<<<<<<< HEAD
=======
// export const addImage = imageUrl => {
//     return {
//       type: ADD_IMAGE,
//       payload: axios.post("/api/image", { imageUrl })
//     };
//   };
>>>>>>> master
