import React, { Component } from 'react';
import {
    OuterContainer,
    MainContainer,
    Button,
    Card
  } from "../../resources/styles/masterStyles";
  import {connect} from "react-redux";
import {getUser} from '../../../ducks/userReducer';

import Nav from "../../Layout/Nav/Nav"

 class Profile extends Component {

  componentDidMount(){
    this.props.getUser() 
  }

    render(){
      console.log(this.props.state.user.user)
        return (

          <OuterContainer 
          justifyContent="flex-start" 
       
          backgroundColor="black" height='100vh'
          backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)" >
          <Nav/>
          <MainContainer>

          <MainContainer margin="3% 0 0 0"width="100vw">
          <MainContainer width="30vw" flexDirection="column">
          <Card height="17vw"width="17vw" borderRadius="50%" objectFit="fill" backgroundImage="url(https://i.postimg.cc/YqCZc6f3/t-bone-linked.jpg)">
          </Card>
            <Button height="25px" width="100px">Edit</Button>
          </MainContainer>

                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="29vw">about user</Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">Login Streak</Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw">Login Time </Card>
                     <Card backgroundColor="rgb(37,37,37)" boxShadow="null" borderRadius="null"width="18vw"> Completed Lessons</Card>

          </MainContainer>
                       <MainContainer>
                           
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
  