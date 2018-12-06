import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  OuterContainer,
  Tab,
  TabContainer
} from "../resources/styles/masterStyles";
import Nav from "../Layout/Nav/Nav";
import dashRoutes from "../../routes/dashRoutes";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { toRecent: false };
  }

  render() {
    
    return (
      <OuterContainer
        height="auto"
        backgroundColor="black"
        justifyContent="none"
        backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)"
      >
        <Nav />
        <TabContainer margin="3% 0 1% 0">
          <Link to="/dashboard/recent">
            <Tab margin="6% 0 0 0"> Recent </Tab>
          </Link>
          <Link to="/dashboard/lessons">
            <Tab margin="6% 0 0 0" >
              Lesson
            </Tab>
          </Link>
          <Link to="/dashboard/drills">
            <Tab margin="6% 0 0 0"> Drills </Tab>
          </Link>
        </TabContainer>
        {dashRoutes}
      </OuterContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
