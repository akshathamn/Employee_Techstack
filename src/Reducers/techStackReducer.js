import * as ActionTypes from '../Actions/Type';

const initialState = {
    technologies: '',
    experience: '',
    project: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TECHSTACK: {
            return { ...state }
            break;
        }
        default:
            return state;
    }
}