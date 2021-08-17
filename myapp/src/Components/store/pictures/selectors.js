import { REQUEST_STATUS } from "../../constants";

export const selectPictures = (state) => state.pictures.data;
export const selectLoading = (state) => 
    state.pictures.request.status === REQUEST_STATUS.LOADING;
export const selectError = (state) => state.pictures.request.error;