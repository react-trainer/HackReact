import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PostCard, AllPostsContainer } from "./ForumSC";
import { Button } from "../../resources/styles/masterStyles";

class AllPosts extends Component {
  constructor() {
    super();
    this.state = {
      all_posts: []
    };
  }

  componentDidMount() {
    axios.get("/api/posts/all").then(response => {
      this.setState({
        all_posts: response.data
      });
    });
  }

  render() {
    let allPostDisplay = this.state.all_posts.map((e, i) => {
      return (
        <PostCard key={i}>
          <h1>{e.post_title}</h1>
          <Link to={`/forum/post/${e.post_id}`}>
            <Button>View Post</Button>
          </Link>
        </PostCard>
      );
    });

    return <AllPostsContainer>{allPostDisplay}</AllPostsContainer>;
  }
}

export default AllPosts;
