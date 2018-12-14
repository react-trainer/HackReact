import React, { Component } from "react";
import forumRoutes from "../../../routes/forumRoutes";

class Forum extends Component {
  constructor() {
    super();
    this.state = {
      post_info: []
    };
  }

  render() {
    return (
      <div>
        <h1>Forum</h1>
        {forumRoutes}
      </div>
    );
  }
}

export default Forum;
