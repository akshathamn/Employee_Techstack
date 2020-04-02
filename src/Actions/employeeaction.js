import *as ActionTypes from './Type';
export function employee() {
    return function (dispatch) {
        dispatch({
            type: "EMPLOYEE"
        });
    }
}