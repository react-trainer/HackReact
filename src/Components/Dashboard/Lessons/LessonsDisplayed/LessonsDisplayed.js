import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Card,
  MainContainer,
  LessonOverlay
} from "../../../resources/styles/masterStyles";

class LessonsDisplayed extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <MainContainer>
        <Link to="/lesson1">
          <Card backgroundImage="url(https://images.unsplash.com/photo-1536619493521-1ba5d2c25532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
            <LessonOverlay>Lesson 1</LessonOverlay>
          </Card>
        </Link>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1541591681685-0246308f076b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 2</LessonOverlay>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1463597990030-6cf9519fd4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 3</LessonOverlay>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 4</LessonOverlay>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1529755138190-9f36355c530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 5</LessonOverlay>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 6</LessonOverlay>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1524282592407-25bf4101ac81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 7</LessonOverlay>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1523807010671-a587c2fba288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)">
          <LessonOverlay>Lesson 8</LessonOverlay>
        </Card>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LessonsDisplayed);
