import React, { Component } from "react";

import "./App.css";

class App extends Component {
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.redirect()}>Go!</button>
      </div>
    );
  }
}

export default App;
