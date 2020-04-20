import *as ActionTypes from './Type';
export function project() {
    return function (dispatch) {
        dispatch({
            type: "PROJECT"
        });
    }
}