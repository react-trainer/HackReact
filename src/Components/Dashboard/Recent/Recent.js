import React, { Component } from "react";
import { Card, MainContainer } from "../../resources/styles/masterStyles";
import { RecentProfileContainer, ProfileImage } from "./RecentSC";
import Heatmap from "./vx/Heatmap";

class Recent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <MainContainer height="100vh">
        <RecentProfileContainer>
          <ProfileImage
            src="https://images.unsplash.com/photo-1540871398124-992abe834578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="profile"
          />
          <Heatmap height="250" width="550" />
        </RecentProfileContainer>
      </MainContainer>
    );
  }
}
export default Recent;
