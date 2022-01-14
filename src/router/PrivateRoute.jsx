import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRoute = ({ hasRole: role, ...props }) => {
  const location = useLocation();
  const { isLogged, hasRole } = useAuth();

  if (role && !hasRole(role)) return <Redirect to="/" />;

  if (!isLogged())
    return <Redirect to={{ pathname: "login", state: { from: location } }} />;

  return <Route {...props}></Route>;
};

export default PrivateRoute;
