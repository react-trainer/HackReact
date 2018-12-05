import React, { Component } from "react";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    return (
      <div>
        <button onClick={() => this.redirect()}>Go!</button>
      </div>
    );
  }
}

export default Landing;
