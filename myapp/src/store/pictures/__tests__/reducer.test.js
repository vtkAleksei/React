import { REQUEST_STATUS_PICTURES } from '../../../constants';
import { REQUEST_LOADING } from '../actionTypes';
import { pecturesReducer } from '../reducer'

describe('returns state', () => {
    it("status loading after requestPictures action",
        () => {
            const expected = {
                pictures: [],
                request: {
                    status: REQUEST_STATUS_PICTURES.LOADING,
                    error: null,
                },
            };
            const type = REQUEST_LOADING;
            const received = pecturesReducer(expected,type);
            expect(received).toEqual(expected);
        });
})



