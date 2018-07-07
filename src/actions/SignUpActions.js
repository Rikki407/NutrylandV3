import firebase from 'firebase';
import {
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    START_REGISTER_USER,
    REG_EMAIL_CHANGED,
    REG_PASSWORD_CHANGED,
    USER_REGISTERED
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
export const registerUser = ({ email, password, fname, lname }) => {
    return dispatch => {
        dispatch({
            type: START_REGISTER_USER
        });
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: USER_REGISTERED,
                    payload: user
                });
            })
            .catch(console.log('User Registeraton Failed !!!', fname, lname));
    };
};
