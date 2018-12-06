import React, { Component } from "react";
import { OuterContainer, Button } from "../../resources/styles/masterStyles";
import {
  LeftContainer,
  RightContainer,
  BottomRight,
  UpperRight,
  Title,
  WrenchIcon,
  ArrowIcon,
  MenuContainers
} from "./LandingSC";
import PreviousButton from "./pictures/arrow-left.svg";
import NextButton from "./pictures/arrow-right.svg";
import Wrench from "./pictures/wrench.svg";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      menuContainers: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
      count: 0,
      topPosition: 25
    };
  }
  nextQuestion() {
    const { count, topPosition } = this.state;
    this.setState({
      count: count + 1,
      topPosition: topPosition + 5
    });
  }
  previousQuestion() {
    const { count, topPosition } = this.state;
    if (count <= 0) {
      this.setState({
        count: 4,
        topPosition: 50
      });
    } else {
      this.setState({
        count: count - 1,
        topPosition: topPosition - 5
      });
    }
  }
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    const { menuContainers, count, topPosition } = this.state;
    const displayMenus = menuContainers.map((value, index) => {
      if (count === index) {
        return (
          <MenuContainers top={`${topPosition}%`} key={index}>
            {value}
          </MenuContainers>
        );
      } else if (count >= 5) {
        this.setState({ count: 0 });
      }
    });
    return (
      <OuterContainer flexDirection="row">
        <LeftContainer>
          {displayMenus}
          <ArrowIcon
            left="26%"
            src={PreviousButton}
            alt="previous button"
            onClick={() => this.previousQuestion()}
          />
          <ArrowIcon
            src={NextButton}
            alt="next button"
            onClick={() => this.nextQuestion()}
          />
        </LeftContainer>
        <RightContainer>
          <UpperRight>
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
            <WrenchIcon src={Wrench} alt="previous button" />
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
