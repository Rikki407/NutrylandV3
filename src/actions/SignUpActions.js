import {
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    START_REGISTER_USER,
    REG_EMAIL_CHANGED,
    REG_PASSWORD_CHANGED
} from './types';
export const changeFnText = text => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};

export const changeLnText = text => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};

export const changeEmailText = text => {
    return {
        type: REG_EMAIL_CHANGED,
        payload: text
    };
};

export const changePasswordText = text => {
    return {
        type: REG_PASSWORD_CHANGED,
        payload: text
    };
};
export const registerUser = (email, password, fname, lname) => {
    console.log(email, password, fname, lname);
    return {
        type: START_REGISTER_USER
    };
};
