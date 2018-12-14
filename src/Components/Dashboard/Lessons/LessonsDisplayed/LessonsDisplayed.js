import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getImages } from "../../../../ducks/lessonReducer";
import {
  Card,
  MainContainer,
  LessonOverlay,
  Title
} from "../../../resources/styles/masterStyles";

class LessonsDisplayed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonComponents: [
        {
          title: "What is JSX?",
          description: "Explore the differences between JavaScript and JSX.",
          image:
            "https://images.unsplash.com/photo-1516934955-a48560318e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Virtual DOM & Rendering",
          description: "Virtual DOM / Render Method",
          image:
            "https://images.unsplash.com/photo-1497732270315-9593381855d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Components and Props",
          description:
            "Learn what components are and how 'props' are used within those components.",
          image:
            "https://images.unsplash.com/photo-1488228350390-e20f4c892840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "What is State?",
          description:
            "Local state is important to creating Class Components. Jump in and discover State!",
          image:
            "https://images.unsplash.com/photo-1484587658517-51c2ea232f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "The React Lifecycle",
          description:
            "Learn about the circle of life! Actually, it's the circle of life for React!",
          image:
            "https://images.unsplash.com/photo-1475887694576-62c01252e177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Event Handling",
          description:
            "Time to step out of our comfort zone. Let's put these React methods to use!",
          image:
            "https://images.unsplash.com/photo-1488390224393-39b815d3cb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.getImages();
  }

  render() {
    const { lessonComponents } = this.state;
    const { imageURL } = this.props.lesson;
    const displayLessons = lessonComponents.map((value, index) => {
      return (
        <Link key={index} to={`/lesson/${index + 1}`}>
          <Card borderRadius="0" backgroundImage={`url(${value.image})`}>
            <LessonOverlay>
              <Title
                letterSpacing="2px"
                fontSize="30px"
                mediaFontSize="30px"
                fontFamily="Scada"
              >
                {value.title}
              </Title>
              {value.description}
            </LessonOverlay>
          </Card>
        </Link>
      );
    });
    return <MainContainer mediaWidth="75%">{displayLessons}</MainContainer>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getImages }
)(LessonsDisplayed);
