import React, { Component } from "react";
import axios from "axios";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {}

  render() {
    return <div>Comments</div>;
  }
}

export default Comments;
