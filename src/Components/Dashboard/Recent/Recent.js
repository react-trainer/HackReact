import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, MainContainer } from "../../resources/styles/masterStyles";
import { getUserImage } from "../../../ducks/userReducer";
import {
  RecentProfileContainer,
  ProfileImage,
  HeatMapContainer
} from "./RecentSC";
import Starfall from "./canvas/Starfall";
import Heatmap from "./vx/Heatmap";

class Recent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getUserImage();
  }

  render() {
    const { userImage } = this.props.user;
    return (
      <MainContainer height="100vh">
        <RecentProfileContainer>
          {!this.props.user.userImage ? null : (
            <ProfileImage src={userImage[0].image_url} alt="profile" />
          )}
          <HeatMapContainer>
            Login Activity
            <Heatmap height="250" width="550" />
          </HeatMapContainer>
        </RecentProfileContainer>
        <Starfall />
      </MainContainer>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUserImage }
)(Recent);
