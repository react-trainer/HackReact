import React from "react";
import { Switch, Route } from "react-router-dom";
import Recent from "../Components/Dashboard/Recent/Recent";
import LessonsDisplayed from "../Components/Dashboard/Lessons/LessonsDisplayed/LessonsDisplayed";
import DrillsDisplayed from "../Components/Dashboard/Drills/DrillsDisplayed/DrillsDisplayed";

export default (
  <Switch>
    <Route path="/dashboard/recent" component={Recent} />
    <Route path="/dashboard/lessons" component={LessonsDisplayed} />
    <Route path="/dashboard/drills" component={DrillsDisplayed} />
  </Switch>
);
