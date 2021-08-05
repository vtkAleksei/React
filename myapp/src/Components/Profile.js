import React from 'react';
import { CHECKED, PROFILE_TOGGLE_SHOW } from './actionTypes';
import { useSelector, useDispatch } from 'react-redux';

export const Profile = () => {
    const profileState = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_TOGGLE_SHOW

        });
    }

    const changeCheck = () => {
        dispatch({
            type: CHECKED
        });
    }


    console.log(profileState);

    return (
        <>
            <h1>Welcome to the page Profile</h1>
            <button onClick={toggleShow}>TOGGLE show</button>
            <input type="checkbox" checked={profileState.check} onChange={changeCheck}></input>
            {(profileState.show || profileState.check) && <div>Привет!!!</div>}
        </>
    )
};