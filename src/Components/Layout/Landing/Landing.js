import React, { Component } from "react";
import { OuterContainer, Button } from "../../resources/styles/masterStyles";
import {
  LeftContainer,
  RightContainer,
  BottomRight,
  UpperRight,
  Title
} from "./LandingSC";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    return (
      <OuterContainer flexDirection="row">
        <LeftContainer />
        <RightContainer>
          <UpperRight />
          <BottomRight>
            <Title>Lesson 1</Title>
            <p>
              Ready to tackle the fundamentals of React? Take the first lesson
              of our course here. No need to sign up!
            </p>
            <Button borderRadius="2px" onClick={() => this.redirect()}>
              Click me!
            </Button>
          </BottomRight>
        </RightContainer>
      </OuterContainer>
    );
  }
}

export default Landing;
