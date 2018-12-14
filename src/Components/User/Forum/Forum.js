import React, { Component } from "react";
import forumRoutes from "../../../routes/forumRoutes";
import { OuterContainer } from "../../resources/styles/masterStyles";
import { Container } from "./ForumSC";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/userReducer";

class Forum extends Component {
  constructor() {
    super();
    this.state = {
      post_info: []
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <OuterContainer>
        <Container>
          <h1>Forum</h1>
          {forumRoutes}
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
