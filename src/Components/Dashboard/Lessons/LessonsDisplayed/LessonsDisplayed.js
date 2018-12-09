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
          image: this.props.lesson.imageURL[0]
        },
        {
          title: "Lesson 2",
          description: "This is a test description",
          image: this.props.lesson.imageURL[1]
        },
        {
          title: "Lesson 3",
          description: "This is a test description",
          image: this.props.lesson.imageURL[2]
        },
        {
          title: "Lesson 4",
          description: "This is a test description",
          image: this.props.lesson.imageURL[3]
        },
        {
          title: "Lesson 5",
          description: "This is a test description",
          image: this.props.lesson.imageURL[4]
        },
        {
          title: "Lesson 6",
          description: "This is a test description",
          image: this.props.lesson.imageURL[5]
        }
      ]
    };
  }

  componentDidMount() {
    this.props.getImages();
    console.log(this.props.lesson);
  }

  render() {
    const { lessonComponents } = this.state;
    const { imageURL } = this.props.lesson;
    const displayLessons = lessonComponents.map((value, index) => {
      return (
        <Link to={`/lesson${index + 1}`}>
          <Card backgroundImage={`url(${imageURL[index]})`}>
            <LessonOverlay>
              <Title>{value.title}</Title>
              {value.description}
            </LessonOverlay>
          </Card>
        </Link>
      );
    });
    return <MainContainer>{displayLessons}</MainContainer>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getImages }
)(LessonsDisplayed);
