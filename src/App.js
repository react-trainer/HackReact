import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ducks/store";

import "./App.css";

class App extends Component {
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <button onClick={() => this.redirect()}>Go!</button>
        </div>
      </Provider>
    );
  }
}

export default App;
