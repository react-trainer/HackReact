import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Card, MainContainer } from "../../../resources/styles/masterStyles";

class LessonsDisplayed extends Component {
  constructor() {
    super();
    // this.state={
    //   obj={}
    // }
  }
  //
  render() {
    return (
      <MainContainer>
        <Card
          backgroundImage="url(https://images.unsplash.com/photo-1536619493521-1ba5d2c25532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"
          alignItems="flex-end"
        >
          <div
            style={{
              width: "100%",
              borderRadius: "3%",
              height: "50%",
              backgroundColor: "rgba(37,37,37,0.7)"
            }}
          >
            Lesson 1
          </div>
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1541591681685-0246308f076b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          Lesson 2
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1463597990030-6cf9519fd4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          {" "}
          Lesson 3{" "}
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          {" "}
          Lesson 4{" "}
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1529755138190-9f36355c530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          {" "}
          Lesson 5{" "}
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)">
          {" "}
          Lesson 6{" "}
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1524282592407-25bf4101ac81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)">
          Lesson 7
        </Card>
        <Card backgroundImage="url(https://images.unsplash.com/photo-1523807010671-a587c2fba288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)">
          Lesson 8
        </Card>

        <Card backgroundImage="url(https://images.unsplash.com/photo-1523807010671-a587c2fba288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)" />
        <Card backgroundImage="url(https://images.unsplash.com/photo-1513020783145-a4d0ac835406?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)" />
      </MainContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LessonsDisplayed);
