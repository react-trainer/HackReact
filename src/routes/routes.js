import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/Layout/Landing/Landing";
import About from "../components/Layout/About/About";
import Core1 from "../components/Dashboard/Lessons/CoreLessons/Core1/Core1";
import Core2 from "../components/Dashboard/Lessons/CoreLessons/Core2/Core2";
import Core3 from "../components/Dashboard/Lessons/CoreLessons/Core3/Core3";
import Core4 from "../components/Dashboard/Lessons/CoreLessons/Core4/Core4";
import Core5 from "../components/Dashboard/Lessons/CoreLessons/Core5/Core5";
import Core6 from "../components/Dashboard/Lessons/CoreLessons/Core6/Core6";
import Sandbox from "../components/Dashboard/Drills/Sandbox/Sandbox";
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/User/Profile/Profile";
import Forum from "../components/User/Forum/Forum";

export default (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route path="/lesson/:id" component={Core1} />
    <Route path="/lesson2" component={Core2} />
    <Route path="/lesson3" component={Core3} />
    <Route path="/lesson4" component={Core4} />
    <Route path="/lesson5" component={Core5} />
    <Route path="/lesson6" component={Core6} />
    <Route path="/sandbox" component={Sandbox} />
    <Route path="/profile" component={Profile} />
    <Route path="/forum" component={Forum} />
  </Switch>
);
