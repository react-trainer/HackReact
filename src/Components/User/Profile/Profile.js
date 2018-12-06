import React, { Component } from 'react';
import {
    OuterContainer,
    MainContainer,
    Button,
    Card
  } from "../../resources/styles/masterStyles";

import Nav from "../../Layout/Nav/Nav"

 class Profile extends Component {

    render(){
        return (

          <OuterContainer 
          justifyContent="flex-start" 
        //   alignItems="baseline" 
          backgroundColor="black" height='100vh'
          backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)" >
          <Nav/>
          <MainContainer>

          <MainContainer margin="3% 0 0 0"width="100vw">
          <MainContainer width="30vw" >
          <Card borderRadius="50%" objectFit="fill" backgroundImage="url(https://i.postimg.cc/YqCZc6f3/t-bone-linked.jpg)">
          </Card>
          
          </MainContainer>

                     
                     <Card>Login Streak</Card>
                     <Card>Login Time </Card>
                     <Card> Completed Lessons</Card>

          </MainContainer>
                       <Button >Edit</Button>
                       <MainContainer>
                           
                       </MainContainer>
          </MainContainer>
          </OuterContainer>
        )
    }
}

export default Profile;