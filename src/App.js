import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>{routes}</Router>
      </Provider>
    );
  }
}

export default App;
