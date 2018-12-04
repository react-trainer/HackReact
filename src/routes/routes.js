import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/Layout/Landing/Landing";
import About from "../components/Layout/About/About";
import Core1 from "../components/Dashboard/Lessons/CoreLessons/Core1/Core1";
import Sandbox from "../components/Dashboard/Drills/Sandbox/Sandbox";

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/lesson1" component={Core1} />
    <Route path="/sandbox" component={Sandbox} />
  </Switch>
);
