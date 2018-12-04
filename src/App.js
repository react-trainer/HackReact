import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ducks/store";
import {BrowserRouter as Router} from 'react-router-dom';

import routes from './routes/routes'
import "./App.css";

class App extends Component {
  redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  render() {
    return (
      <Provider store={store}>
      <Router>

        <div className="App">
          <button onClick={() => this.redirect()}>Go!</button>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
