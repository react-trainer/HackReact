import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../components/User/Profile/Profile";
import Forum from "../components/User/Forum/Forum";
import About from "../components/Layout/About/About";

export default (
  <Switch>
    <Route path="/profile" component={Profile} />
    <Route path="/forum" component={Forum} />
    <Route path="/about" component={About} />
  </Switch>
);
