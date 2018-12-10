import React, {Component} from 'react'
import {
    Card,
    Button
  } from "../../resources/styles/masterStyles";
  import S3Uploader from './S3Uploader';
  import {connect} from "react-redux";
  import {getUser} from '../../../ducks/userReducer';
  import axios from "axios";

 class Edit extends Component {
    constructor(){
        super();
        this.state={
            aboutText: "",
        };
    }
    componentDidMount(){
        this.props.getUser() 
      }

      aboutHandler(input){
        this.setState({aboutText: input})
    }

    // async axios.put()

      async  handleEdit  (id) {
        await axios.put(`/api/user/${id}`,{
            about_user: this.state.aboutText
            })
        .then( ()=> {
            this.setState({aboutText: ""})
            this.props.getUser()})
    }


    render(){

        const user = this.props.state.user.user

       const submitButton = user.map((e,i) => {
           return (
               <div key={i}>
                <Card >
                <input value={this.state.aboutText}type="text" onChange={e => this.aboutHandler(e.target.value)} />
                    tell us about yourself
                </Card>
               <Button height="25px" width="100px" onClick={()=>{this.handleEdit(e.user_id, this.state.aboutText)}}>Submit</Button>
               </div>
           )
       })

        

        return(
            
                <Card height="40vh" width="100vw" padding="20px">

                <Card>
                    <S3Uploader/>
                    add image
                </Card>

                    {submitButton}

                {/* <Button height="25px" width="100px" onClick={()=>{this.handleEdit()}}>Submit</Button> */}

                </Card>
             
        )
    }
}

function mapStatetoProps(state){
    return {state};
  }
  
  export default connect(
    mapStatetoProps, 
    { getUser }
    )(Edit);