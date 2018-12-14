import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  NavContainer,
  MenuButtons,
  MenuInner,
  MenuContainer,
  MenuToggle
} from "./NavSC";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
      showMenu: false
    };
  }
  openMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ showNav: true });
      }.bind(this),
      500
    );
  }
  render() {
    const { showNav, moveNav, showMenu } = this.state;
    return (
      <NavContainer showNav={showNav} moveNav={moveNav}>
        <MenuContainer showMenu={showMenu}>
          <MenuInner showMenu={showMenu}>
            <MenuButtons showMenu={showMenu}>
              <Link to="/dashboard/recent">
                <h1>Home</h1>
              </Link>
              <Link to="/profile">
                <h2>Profile</h2>
              </Link>
              <Link to="/forum/all">
                <h2>Forum</h2>
              </Link>
              <Link to="/sandbox">
                <h4>Sandbox</h4>
              </Link>
              <a href="https://reactjs.org/docs/getting-started.html">
                <h6>React Docs</h6>
              </a>
              <Link to="">
                <h5>About</h5>
              </Link>
              <Link to="">
                <h6>Logout</h6>
              </Link>
            </MenuButtons>
          </MenuInner>
        </MenuContainer>
        <MenuToggle onClick={() => this.openMenu()}>&#x2630;</MenuToggle>
      </NavContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);
