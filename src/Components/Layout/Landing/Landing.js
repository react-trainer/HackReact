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
        <LeftContainer>
          <img
            src="https://www.effectlab.gr/assets/stylesheets/css/img/icon-slider-arrow-left.svg"
            alt="previous button"
          />
          <img
            src="https://www.effectlab.gr/assets/stylesheets/css/img/icon-slider-arrow-right.svg"
            alt="next button"
          />
        </LeftContainer>
        <RightContainer>
          <UpperRight>
            {" "}
            <Title color="rgb(37, 37, 37)" textTransform="uppercase">
              Log in || Sign up!
            </Title>
            <p>
              {" "}
              Become a user for free! Absolutely no payment information needed.
              Just sign up!
            </p>
            <Button
              boxShadow="0 0 0 0"
              borderSize="1px"
              borderColor="rgb(37, 37, 37)"
              color="rgb(37, 37, 37)"
              onClick={() => this.redirect()}
            >
              Login/SignUp
            </Button>
          </UpperRight>
          <BottomRight>
            <Title textTransform="uppercase">Lesson 1</Title>
            <p>
              Ready to tackle the fundamentals of React?
              <br />
              Take the first lesson of our course here.
              <br />
              No need to sign up!
            </p>
            <Button
              boxShadow="0 0 0 0"
              borderSize="2px"
              onClick={() => this.redirect()}
            >
              VIEW
            </Button>
          </BottomRight>
        </RightContainer>
      </OuterContainer>
    );
  }
}

export default Landing;
