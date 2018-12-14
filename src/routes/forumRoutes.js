import React from "react";
import { Switch, Route } from "react-router-dom";
import AllPosts from "../components/User/Forum/AllPosts";
import Post from "../components/User/Forum/Post";

export default (
  <Switch>
    <Route path="/forum/all" component={AllPosts} />
    <Route path="/forum/post/:id" component={Post} />
  </Switch>
);
