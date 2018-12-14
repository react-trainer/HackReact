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
          title: "Lesson 1",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1516934955-a48560318e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 2",
          description: "Virtual DOM / Render method",
          image:
            "https://images.unsplash.com/photo-1497732270315-9593381855d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 3",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1488228350390-e20f4c892840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 4",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1484587658517-51c2ea232f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 5",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1475887694576-62c01252e177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 6",
          description: "This is a test description",
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
          <Card backgroundImage={`url(${value.image})`}>
            <LessonOverlay>
              <Title
                letterSpacing="2px"
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
