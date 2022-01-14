import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRoute = (props) => {
  const { isLogged } = useAuth();
  if (isLogged()) return <Redirect to="/" />;
  return <Route {...props}></Route>;
};

export default PublicRoute;
