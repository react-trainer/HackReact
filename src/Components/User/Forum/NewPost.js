import React, { Component } from "react";
import { Overlay, Dialog, NewContainer } from "./ForumSC";
import { Button } from "../../resources/styles/masterStyles";
import axios from "axios";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      post_title: "",
      post_content: ""
    };
  }

  makePost = () => {
    axios
      .post("/api/post", {
        user_id: this.props.user_id,
        post_title: this.state.post_title,
        post_content: this.state.post_content
      })
      .then(this.props.onClose());
  };

  handleInput = (e, type) => {
    this.setState({ [type]: e });
  };

  render() {
    return (
      <div>
        <Overlay />;
        <Dialog>
          <NewContainer>
            <input
              id="title"
              value={this.state.post_title}
              placeholder="Title goes here"
              onChange={e => this.handleInput(e.target.value, "post_title")}
            />
            <textarea
              id="content"
              onChange={e => this.handleInput(e.target.value, "post_content")}
              value={this.state.post_content}
              placeholder="There may be stupid questions, but who cares?"
            />
            <div>
              <Button onClick={this.props.onClose}>Back</Button>
              <Button onClick={this.makePost}>Submit</Button>
            </div>
          </NewContainer>
        </Dialog>
      </div>
    );
  }
}

export default NewPost;
