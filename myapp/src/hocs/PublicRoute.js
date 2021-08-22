import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/profile/selectors";

export const PublicRoute = ({ ...props }) => {
  const authed = useSelector(selectAuth);

  return !authed ? <Route {...props} /> : <Redirect to="/home" />;
};
