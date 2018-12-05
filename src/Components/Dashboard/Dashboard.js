import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    this.state = { toRecent: false, toLessons: false };
  }
  setRedirect = () => {
    this.setState({
      toRecent: true,
      toLessons: false
    });
  };

  componentDidMount() {
    this.toLessons();
  }

  toLessons() {
    this.setState({
      toLessons: true,
      toRecent: false
    });
  }
  render() {
    const { toLessons, toRecent } = this.state;
    return (
      <OuterContainer
        backgroundColor="black"
        justifyContent="none"
        backgroundImage="linear-gradient(0deg, rgb(0,216,255)-158%, rgb(38, 38, 38)48%)"
      >
        <Nav />
        <TabContainer>
          <Tab margin="6% 0 0 0"> Recent </Tab>
          <Tab margin="6% 0 0 0" onCLick={() => this.toLessons()}>
            {" "}
            Lesson{" "}
          </Tab>
          <Tab margin="6% 0 0 0"> Drills </Tab>
        </TabContainer>

        {dashRoutes}
        {toRecent ? <Redirect to="/dashboard/recent" /> : null}
        {toLessons ? <Redirect to="/dashboard/lessons" /> : null}
      </OuterContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
