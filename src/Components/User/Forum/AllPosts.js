import React, { Component } from "react";

class AllPosts extends Component {
  constructor() {
    super();
    this.state = {
      all_posts: []
    };
  }

  render() {
    return (
      <div>
        <h1>All Posts</h1>
      </div>
    );
  }
}

export default AllPosts;
