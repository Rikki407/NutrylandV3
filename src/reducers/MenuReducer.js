import { MENU_FETCH_SUCCESS } from '../actions/types';
const INITIAL_STATE = {
    breakfast: '',
    dinner: '',
    lunch: '',
    postWorkOut: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MENU_FETCH_SUCCESS:
            return { ...state, breakfast: action.payload };
        default:
            return { ...state };
    }
};
