import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Feed from "../pages/Feed/Feed";
import Post from "../pages/Post/Post";
import Notifications from "../pages/Notifications/Notifications";
import NotFound from "../pages/NotFound/NotFound";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AddPost from "../pages/AddPost/AddPost";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>

      <PublicRoute exact path="/login" component={Login}></PublicRoute>

      <PublicRoute exact path="/register" component={Register}></PublicRoute>

      <PrivateRoute
        exact
        path="/dashboard"
        component={Dashboard}
        hasRole="admin"
      ></PrivateRoute>

      <PrivateRoute exact path="/feed" component={Feed}></PrivateRoute>

      <PrivateRoute
        path="/notifications"
        component={Notifications}
      ></PrivateRoute>

      <PrivateRoute path="/addpost" component={AddPost}></PrivateRoute>

      <PrivateRoute exact path="/feed/:postid" component={Post}></PrivateRoute>

      <Route path="*" component={NotFound}></Route>
    </Switch>
  );
};

export default AppRouter;
