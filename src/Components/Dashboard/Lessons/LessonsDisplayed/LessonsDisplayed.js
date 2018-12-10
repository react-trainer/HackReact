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
            "https://images.unsplash.com/photo-1536619493521-1ba5d2c25532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 2",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1541591681685-0246308f076b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 3",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1463597990030-6cf9519fd4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 4",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 5",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1529755138190-9f36355c530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "Lesson 6",
          description: "This is a test description",
          image:
            "https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
        <Link key={index} to={`/lesson${index + 1}`}>
          <Card backgroundImage={`url(${value.image})`}>
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
