import React, { Component } from 'react';
import {
    MainContainer,
    Button,
    Card
  } from "../../resources/styles/masterStyles";
  import {connect} from "react-redux";
import {getUser} from '../../../ducks/userReducer';
import Nav from "../../Layout/Nav/Nav"
import Edit from './Edit';
import CompletedLessons from './CompletedLessons';
import styled from 'styled-components';

const Img = styled.img`
height:17vw;
width:17vw; 
border-radius:50%; 
object-fit:fill;
`;
const OuterContainer = styled.div`
  /* position: fixed;*/
  
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  background-image: ${props => props.backgroundImage || null};
  background-color: ${props => props.backgroundColor || "white"};
  font-family: ${props => props.fontFamily || "'Signika', sans-serif"};
  overflow-x: hidden;
`;

 class Profile extends Component {
   constructor(){
     super();
     this.state={
       editable: false,
       editName: false
     }
   }

  componentDidMount(){
    this.props.getUser() 
  }

  showEdit = () => {
    this.setState({
      editable: !this.state.editable,
      editName: !this.state.editName})
      this.props.getUser()
      }

    render(){

      const user = this.props.state.user.user

      const userMapped = user.map((e,i) => {
        return (
          <div key={i}>
          {e.first_name + " "} 
          {e.last_name + " "} 
          Rating:{e.rating}
          </div>
        )
      })

      const tylersMug = user.map((e,i) => {
        return(
          <div key={i}>
          <Card height="17vw"width="17vw" borderRadius="50%" objectFit="fill" >
          <Img src={e.image_url} />
          </Card>
          </div>
        )
      })


      const userAbout = user.map((e,i) => {
        return(
          <div key={i}>
          {e.about_user}
          </div>
        )
      })


        return (

          <OuterContainer 
          justifyContent="flex-start" 
       
          backgroundColor="black"
          backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)" >
          {this.state.editable ? (
          <Edit user_id={this.props.state.user.user.user_id}/> ) : null }
        
          <Nav/>

          <MainContainer>

          <MainContainer margin="3% 0 0 0"width="100vw">
          <MainContainer width="30vw" flexDirection="column">
         
          {tylersMug}
          
            <Button height="25px" width="100px" onClick={() => this.showEdit()}>{this.state.editName ?  "Finish":  "Edit"}</Button>
          <Card height="7vh" width="7vw" boxShadow="null" borderRadius="null">
            {userMapped}
          </Card>
          </MainContainer>

                     <Card alignItem="flex-start" backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="29vw">{userAbout}</Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">Login Streak</Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">Login Time </Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">
                      <CompletedLessons/>
                      Completed Lessons
                      </Card>

          </MainContainer>
          </MainContainer>
          </OuterContainer>
        )
    }
}

function mapStatetoProps(state){
  return {state};
}

export default connect(
  mapStatetoProps, 
  { getUser }
  )(Profile);
  