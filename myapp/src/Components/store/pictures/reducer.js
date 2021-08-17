import { REQUEST_STATUS } from "../../constants";
import { REQUEST_ERROR, REQUEST_LOADING, REQUEST_PICTURE_COMPLETED } from "./actionTypes";

const initialState = {
    data: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: null,
    },
};

export const pecturesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_LOADING: {
            return {
                ...state,
                request: {
                    ...state.request,
                    error: null,
                    status: REQUEST_STATUS.LOADING
                },
            };
        }
        case REQUEST_PICTURE_COMPLETED: {
            return {
                ...state,
                data: payload,
                request: {
                    status: REQUEST_STATUS.COMPLETED,
                },
            };
        }
        case REQUEST_ERROR: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.ERORR,
                    error: payload,
                },
            };
        }

        default:
            return state;
    }
};