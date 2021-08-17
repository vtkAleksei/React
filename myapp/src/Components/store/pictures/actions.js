import { API_URL_LESSON_8 } from "../../constants";
import { REQUEST_LOADING, REQUEST_ERROR, REQUEST_PICTURE_COMPLETED } from "./actionTypes";

const getPictureLoading = () => ({
    type: REQUEST_LOADING
});

const getPictureErorr = (error) => ({
    type: REQUEST_ERROR,
    payload: error
});

const getPicturesCompleted = (pictures) => ({
    type: REQUEST_PICTURE_COMPLETED,
    payload: pictures
});

export const getPictures = () => async (dispatch) => {
    dispatch(getPictureLoading());

    try {
        const response = await fetch(API_URL_LESSON_8);
        if (!response.ok) {
            throw new Error('Request error ', response.status)
        }
        const result = await response.json();

        dispatch(getPicturesCompleted(result));
    }
    catch (error) {
        dispatch(getPictureErorr(true));
    }

}