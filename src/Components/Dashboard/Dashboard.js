import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import dashRoutes from "../../routes/dashRoutes";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  componentDidMount() {
    this.setRedirect();
  }
  render() {
    const { redirect } = this.state;
    return (
      <div>
        {dashRoutes}
        {redirect ? <Redirect to="/dashboard/recent" /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
