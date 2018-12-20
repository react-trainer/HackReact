import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Components/Layout/Landing/Landing";
import About from "../Components/Layout/About/About";
import Core1 from "../Components/Dashboard/Lessons/CoreLessons/Core1/Core1";
import Sandbox from "../Components/Dashboard/Drills/Sandbox/Sandbox";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/User/Profile/Profile";
import Forum from "../Components/User/Forum/Forum";

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route path="/lesson/:id" component={Core1} />
    <Route path="/sandbox/:id" component={Sandbox} />
    <Route path="/sandbox" component={Sandbox} />
    <Route path="/profile" component={Profile} />
    <Route path="/forum" component={Forum} />
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
