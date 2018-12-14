import React, { Component } from "react";
import forumRoutes from "../../../routes/forumRoutes";
import { OuterContainer, Button } from "../../resources/styles/masterStyles";
import { Container } from "./ForumSC";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/userReducer";
import NewPost from "./NewPost";

class Forum extends Component {
  constructor() {
    super();
    this.state = {
      post_info: [],
      new: false
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  onClose = () => {
    this.hideNew();
  };

  onOpen = () => {
    this.showNew();
  };

  showNew = () => {
    this.setState({
      new: true
    });
  };

  hideNew = () => {
    this.setState({ new: false });
  };

  render() {
    return (
      <OuterContainer>
        <Container>
          <h1>Forum</h1>
          <Button onClick={this.onOpen}>New Post</Button>
          {forumRoutes}
          {this.state.new ? (
            <NewPost
              user_id={this.props.state.user.user[0].user_id}
              onClose={this.onClose}
              onOpen={this.onOpen}
            />
          ) : null}
        </Container>
      </OuterContainer>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getUser }
)(Forum);
