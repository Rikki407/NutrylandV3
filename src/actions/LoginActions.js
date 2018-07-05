import firebase from 'firebase';
import Expo from 'expo';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    EMAIL_LOGIN,
    FB_SIGNIN,
    GOOGLE_SIGNIN,
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
            .then(console.log('EmailLoginSuccess'))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(console.log('EmailSignUpSuccess'));
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
        dispatch({
            type: FB_SIGNIN
        });

        if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(
                token
            );
            firebase
                .auth()
                .signInAndRetrieveDataWithCredential(credential)
                .then(
                    firebase.auth().onAuthStateChanged(user => {
                        if (user != null) {
                            console.log(user);
                        }
                    })
                )
                .catch(error => {
                    console.log(error);
                });
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
        dispatch({
            type: GOOGLE_SIGNIN
        });
        if (result.type === 'success') {
            console.log('hello', result);
            const credential = firebase.auth.GoogleAuthProvider.credential(
                result.idToken,
                result.accessToken
            );
            const currentUser = await firebase
                .auth()
                .signInAndRetrieveDataWithCredential(credential);
            console.log(currentUser);
        }
    };
};
