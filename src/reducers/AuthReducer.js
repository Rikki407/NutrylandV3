import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    EMAIL_LOGIN
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    userLoggedIn: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case EMAIL_LOGIN:
            return { ...state, userLoggedIn: true };
        default:
            return state;
    }
};
