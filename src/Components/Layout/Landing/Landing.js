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
      count: 0,
      sidePosition: 0,
      menuContainers: [
        {
          title: ` React Made Simple. `,
          title2: `For You.`,
          title3: `By You.`,
          sub:
            "New to React? Trouble understanding the React Documentation? Start here to begin your journey!",
          image: <ScribbleUnderline src={Underline} alt="scribble" />,
          button: "Learn More",
          link: () => this.toAbout()
        },
        {
          title: "What is HackReact?",
          title2: "What Do We Do?",
          sub: "Learn more about HackReact by clicking below!",
          button: "About",
          link: () => this.toAbout()
        },
        {
          title: "Read the",
          title2: "React Docs",
          sub:
            "Feel free to browser the React Docs Yourself! We provide a simple way of learning them.",
          button: (
            <a
              style={{ color: "black" }}
              href="https://reactjs.org/docs/getting-started.html"
            >
              React Docs
            </a>
          )
        },
        {
          title: "Test Out Your Skills",
          title2: "In Our Sandbox",
          sub: `Take a dive in the sandbox and try out your skills before or after our course!`,
          button: "Play Around"
        },
        {
          title: "Sign Up",
          sub: "Ready to learn more about React? Sign up and learn more!",
          button: "Sign Up"
        }
      ]
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
  toLogin = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    const { menuContainers, sidePosition } = this.state;
    const displayMenus = menuContainers.map((value, index) => {
      return (
        <MenuContents translateX={sidePosition} key={index}>
          <Title
            color="black"
            fontSize="3.7rem"
            fontWeight="300"
            fontFamily="CeraGR-Black, sans-serif"
          >
            {value.title}
            <br />
            {value.title2}
            <br />
            {value.title3}
          </Title>
          {value.image}{" "}
          <Title fontSize="1rem" margin="2% 0" fontWeight="200" color="black">
            {value.sub}
          </Title>{" "}
          <Button
            boxShadow="0 0 0 0"
            borderSize="1px"
            borderColor="rgb(37, 37, 37)"
            color="rgb(37, 37, 37)"
            position="relative"
            top="60%"
            onClick={value.link}
          >
            {value.button}
          </Button>
        </MenuContents>
      );
    });
    return (
      <OuterContainer flexDirection="row">
        <LeftContainer>
          <MenuContainers>{displayMenus}</MenuContainers>

          <ArrowIcon
            left="55%"
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
              onClick={() => this.toLogin()}
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
              onClick={() => this.toLogin()}
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
