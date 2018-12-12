import React, { Component } from "react";
import { Card, MainContainer } from "../../resources/styles/masterStyles";
import { connect } from "react-redux";

class Recent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <MainContainer height="100vh">Recent</MainContainer>;
  }
}
export default Recent;
