import {
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    REG_EMAIL_CHANGED,
    REG_PASSWORD_CHANGED,
    START_REGISTER_USER,
    USER_REGISTERED
} from '../actions/types';
const INITIAL_STATE = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    userLoggedIn: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_NAME_CHANGED:
            return { ...state, fname: action.payload };
        case LAST_NAME_CHANGED:
            return { ...state, lname: action.payload };
        case REG_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case REG_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case START_REGISTER_USER:
            return { ...state };
        case USER_REGISTERED:
            return { ...state, userLoggedIn: true };
        default:
            return { ...state };
    }
};
