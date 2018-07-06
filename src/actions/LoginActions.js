import firebase from 'firebase';
import Expo from 'expo';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    EMAIL_LOGIN,
    EMAIL_LOGIN_SUCCESS,
    FB_SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_SUCCESS,
    IOS_CLIENT_ID,
    ANDROID_CLIENT_ID
} from './types';

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginWithEmail = ({ email, password }) => {
    return dispatch => {
        dispatch({ type: EMAIL_LOGIN });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(dispatch({ type: EMAIL_LOGIN_SUCCESS }))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(emailLoginSuccess(dispatch));
            });
    };
};

export const signinWithFB = () => {
    return async dispatch => {
        const {
            type,
            token
        } = await Expo.Facebook.logInWithReadPermissionsAsync(
            '273433406549759',
            {
                permissions: ['public_profile', 'email']
            }
        );
        if (type === 'success') {
            const credentials = firebase.auth.FacebookAuthProvider.credential(
                token
            );
            socialLoginSuccess(dispatch, FB_SIGNIN_SUCCESS, credentials);
        }
    };
};

export const signinWithGoogle = () => {
    return async dispatch => {
        const result = await Expo.Google.logInAsync({
            iosClientId: IOS_CLIENT_ID,
            androidClientId: ANDROID_CLIENT_ID,
            scopes: ['profile', 'email']
        });
        if (result.type === 'success') {
            const credentials = firebase.auth.GoogleAuthProvider.credential(
                result.idToken,
                result.accessToken
            );
            socialLoginSuccess(dispatch, GOOGLE_SIGNIN_SUCCESS, credentials);
        }
    };
};

const socialLoginSuccess = async (dispatch, type, credentials) => {
    await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credentials)
        .then(
            firebase.auth().onAuthStateChanged(user => {
                if (user != null) {
                    dispatch({
                        type,
                        payload: user
                    });
                }
            })
        );
};

const emailLoginSuccess = dispatch => {
    firebase.auth().onAuthStateChanged(user => {
        if (user != null) {
            dispatch({
                type: EMAIL_LOGIN_SUCCESS,
                payload: user
            });
        }
    });
};
