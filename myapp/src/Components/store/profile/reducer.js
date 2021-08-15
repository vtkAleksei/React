import { CHECKED, PROFILE_TOGGLE_SHOW } from "./actionTypes";

const initialState = {
    show: false,
    check: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_TOGGLE_SHOW): {
            return {
                ...state,
                show: !state.show,
            };
        }
        case (CHECKED): {
            return {
                ...state,
                check: !state.check,
            };
        }
        default:
            return state;
    }
}