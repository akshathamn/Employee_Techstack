import * as ActionTypes from '../Actions/Type';

const initialState = {
    project: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PROJECT: {
            return { ...state }
            break;
        }
        default:
            return state;
    }
}