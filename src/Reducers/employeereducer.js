import * as ActionTypes from '../Actions/Type';

const initialState = {
    name: '',
    place: '',
    designation: '',
    technologies: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.EMPLOYEE: {
            return { ...state }
            break;
        }
        default:
            return state;
    }
}