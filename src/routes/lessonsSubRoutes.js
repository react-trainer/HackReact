import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateLesson from "../components/Dashboard/Lessons/CreateLesson/CreateLesson";
import MyLessonsDisplayed from "../components/Dashboard/Lessons/MyLessonsDisplayed/MyLessonsDisplayed";
import AllDisplayed from "../components/Dashboard/Lessons/LessonsDisplayed/AllDisplayed/AllDisplayed";

export default (
  <Switch>
    <Route path="/dashboard/lessons/all" component={AllDisplayed} />
    <Route path="/dashboard/lessons/user" component={MyLessonsDisplayed} />
    <Route path="/dashboard/lessons/new" component={CreateLesson} />
  </Switch>
);