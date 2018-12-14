import React, { Component } from "react";
import { Overlay, Dialog, NewContainer } from "./ForumSC";
import { Button } from "../../resources/styles/masterStyles";
import axios from "axios";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      comment_content: ""
    };
  }

  makeComment = () => {
    axios
      .post("/api/comment", {
        user_id: this.props.user_id,
        comment_content: this.state.comment_content,
        post_id: this.props.post_id
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
            <textarea
              id="content"
              onChange={e =>
                this.handleInput(e.target.value, "comment_content")
              }
              value={this.state.comment_content}
              placeholder="Write a comment..."
            />
            <div>
              <Button onClick={this.props.onClose}>Back</Button>
              <Button onClick={this.makeComment}>Submit</Button>
            </div>
          </NewContainer>
        </Dialog>
      </div>
    );
  }
}

export default NewPost;
