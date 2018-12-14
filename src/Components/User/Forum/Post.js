import React, { Component } from "react";
import axios from "axios";
import { Button } from "../../resources/styles/masterStyles";
import { PostContainer, IndPost, CommentsContainer } from "./ForumSC";
import Comments from "./Comments";
import NewComment from "./NewComment";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/userReducer";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post_info: [{ post_id: 0 }],
      comment: false
    };
  }

  componentDidMount() {
    this.getPost();
    this.props.getUser();
  }

  onClose = () => {
    this.hideComment();
  };

  onOpen = () => {
    this.showComment();
  };

  showComment = () => {
    this.setState({
      comment: true
    });
  };

  hideComment = () => {
    this.setState({ comment: false });
  };

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
          <br />
        </div>
      );
    });
    return (
      <PostContainer>
        <IndPost>
          {displayPost}
          <Button onClick={this.onOpen}>Comment</Button>
        </IndPost>
        <CommentsContainer>
          <Comments post_id={this.state.post_info[0].post_id} />
        </CommentsContainer>
        {this.state.comment ? (
          <NewComment
            onClose={this.onClose}
            user_id={this.props.state.user.user.user_id}
            onOpen={this.onOpen}
            post_id={this.state.post_info[0].post_id}
          />
        ) : null}
      </PostContainer>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getUser }
)(Post);
