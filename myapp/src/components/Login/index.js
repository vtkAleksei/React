import React, { useState } from "react";
import firebase from "firebase";
import { useInput } from "../../utils/useInput";
import "./styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithFB, loginWithFB } from "../../store/profile/actions";
import { selectProfileError } from "../../store/profile/selectors";

export const Login = ({ isSignUp }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectProfileError);

  const {
    value: email,
    handleChange: handleChangeEmail,
    reset: resetEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handleChangePassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    if (isSignUp) {
      dispatch(signUpWithFB(email, password));
    } else {
      dispatch(loginWithFB(email, password));
    }
    resetEmail();
    resetPassword();
  };

  return (
    <>
      <h2>{isSignUp ? "SIGN UP" : "LOGIN"}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input type="submit" />
        {error && <span>{error}</span>}
      </form>
      <Link to={`${isSignUp ? "/login" : "/signup"}`}>
        {!isSignUp ? "SIGN UP" : "LOGIN"}
      </Link>
    </>
  );
};
