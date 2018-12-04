import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import navRoutes from "../../routes/navRoutes";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>{navRoutes}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);
