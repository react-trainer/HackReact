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
  MenuContainers,
  MenuContents,
  ScribbleUnderline
} from "./LandingSC";
import PreviousButton from "./pictures/arrow-left.svg";
import NextButton from "./pictures/arrow-right.svg";
import Wrench from "./pictures/wrench.svg";
import Underline from "./pictures/underline.png";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      menuContainers: [
        {
          title: (
            <Title
              color="black"
              fontSize="3.7rem"
              fontWeight="300"
              fontFamily="CeraGR-Black, sans-serif"
            >
              React Made Simple.
              <br />
              For You.
              <br />
              By You.
            </Title>
          ),
          sub: (
            <Title
              fontSize="1rem"
              margin="2% 0 0 0"
              fontWeight="200"
              color="black"
            >
              New to React? Trouble understanding the React Documentation? Start
              here to begin your journey!
            </Title>
          ),
          image: <ScribbleUnderline src={Underline} alt="scribble" />,
          button: (
            <Button
              boxShadow="0 0 0 0"
              borderSize="1px"
              borderColor="rgb(37, 37, 37)"
              color="rgb(37, 37, 37)"
              position="absolute"
              top="60%"
              onClick={() => this.redirect()}
            >
              Learn More
            </Button>
          )
        },
        { title: "About" },
        { title: "React Docs" },
        { title: "Sandbox" },
        { title: "Sign Up" }
      ],
      count: 0,
      sidePosition: 0
    };
  }
  nextQuestion() {
    const { count, sidePosition } = this.state;
    if (count >= 4) {
      this.setState({
        count: 0,
        sidePosition: 0
      });
    } else {
      this.setState({
        count: count + 1,
        sidePosition: sidePosition + 1
      });
    }
  }
  previousQuestion() {
    const { count, sidePosition } = this.state;
    if (count <= 0) {
      this.setState({
        count: 4,
        sidePosition: 4
      });
    } else {
      this.setState({
        count: count - 1,
        sidePosition: sidePosition - 1
      });
    }
  }
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    const { menuContainers, sidePosition } = this.state;
    const displayMenus = menuContainers.map((value, index) => {
      return (
        <MenuContents translateX={sidePosition} key={index}>
          {value.title} {value.image} {value.sub} {value.button}
        </MenuContents>
      );
    });
    return (
      <OuterContainer flexDirection="row">
        <LeftContainer>
          <MenuContainers>{displayMenus}</MenuContainers>

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
