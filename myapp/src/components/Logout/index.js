import React from "react";
import { useDispatch } from "react-redux";
import { logoutWithFB } from "../../store/profile/actions";

export const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutWithFB());
  };

  return <button onClick={handleClick}>LOGOUT</button>;
};
