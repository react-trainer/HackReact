import React, {Component} from 'react'
import {
    Card,
    Button
  } from "../../resources/styles/masterStyles";
  import S3Uploader from './S3Uploader';
  

export default class Edit extends Component {
    render(){
        return(
            
                <Card height="40vh" width="100vw" padding="20px">

                <Card>
                    <S3Uploader/>
                    add image
                </Card>

                <Card >
                <textarea rows="10" cols="50"> </textarea>
                    tell us about yourself
                </Card>

                <Button height="25px" width="100px">Submit</Button>

                </Card>
             
        )
    }
}