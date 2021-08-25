import React, { useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Profile from "../Profile";
import Home from "../Home";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";
import { Login } from "../Login";
import { connectProfileToFB } from "../../store/profile/actions";
import { Logout } from "../Logout";
import { NoChat } from "../NoChat";
import { Pictures } from "../Pictures";

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectProfileToFB());
  }, []);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/pictures">Pictures</Link>
        </li>

      </ul>

      <Logout />

      <Switch>
        <PrivateRoute
          path="/profile"
          render={(data) => (
            <Profile match={data.match} history={data.history} />
          )}
        />
        <PrivateRoute path="/home/:chatId?">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/nochat">
          <NoChat />
        </PrivateRoute>
        <Route path="/" exact>
          <h1>Welcome MAIN PAGE</h1>
        </Route>
        <PrivateRoute path="/pictures">
          <Pictures />
        </PrivateRoute>
        <PublicRoute path="/login" exact>
          <Login />
        </PublicRoute>
        <PublicRoute path="/signup" exact>
          <Login isSignUp />
        </PublicRoute>
        <Route path="*">
          <h3>Page not found.</h3>
          <h1>Error 404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
