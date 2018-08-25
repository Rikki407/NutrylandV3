import firebase from 'firebase';
import { MENU_FETCH_SUCCESS } from './types';

export const menuFetch = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase.database()
            .ref(`/Menues/`)
            .on('value', snapshot => {
                dispatch({ type: MENU_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
