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

  getComments() {
    console.log(this.props.post_id);
    axios
      .get(`/api/comments/all/${this.props.post_id}`, {
        post_id: this.props.post_id
      })
      .then(response => this.setState({ comments: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    let commentsDisplay = this.state.comments.map((e, i) => {
      return (
        <div key={i}>
          <h4>{e.comment_content}</h4>
          <br />
        </div>
      );
    });
    return (
      <div>
        <h2>Comments</h2>
        <br />
        {commentsDisplay}
      </div>
    );
  }
}

export default Comments;
