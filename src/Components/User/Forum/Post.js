import React, { Component } from "react";
import axios from "axios";
import { Button } from "../../resources/styles/masterStyles";
import { PostContainer, IndPost } from "./ForumSC";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post_info: []
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    axios
      .get(`/api/post/${this.props.match.params.id}`)
      .then(response => this.setState({ post_info: response.data }));
  };

  render() {
    let displayPost = this.state.post_info.map((e, i) => {
      return (
        <div>
          <h1>{e.post_title}</h1>
          <br />
          <h4>{e.post_content}</h4>
        </div>
      );
    });
    return (
      <PostContainer>
        <IndPost>
          {displayPost}
          <Button>Comment</Button>
        </IndPost>
      </PostContainer>
    );
  }
}

export default Post;
