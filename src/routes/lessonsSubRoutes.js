import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateLesson from "../Components/Dashboard/Lessons/CreateLesson/CreateLesson";
import MyLessonsDisplayed from "../Components/Dashboard/Lessons/MyLessonsDisplayed/MyLessonsDisplayed";
import AllDisplayed from "../Components/Dashboard/Lessons/LessonsDisplayed/AllDisplayed/AllDisplayed";
// import Core1 from "../Components/Dashboard/Lessons/CoreLessons/Core1/Core1";

export default (
  <Switch>
    <Route path="/dashboard/lessons/all" component={AllDisplayed} />
    <Route path="/dashboard/lessons/user" component={MyLessonsDisplayed} />
    <Route path="/dashboard/lessons/new" component={CreateLesson} />
  </Switch>
);
