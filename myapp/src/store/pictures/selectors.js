import { REQUEST_STATUS_PICTURES } from "../../constants";

export const selectPictures = (state) => state.pictures.data;
export const selectLoading = (state) => 
    state.pictures.request.status === REQUEST_STATUS_PICTURES.LOADING;
export const selectError = (state) => state.pictures.request.error;