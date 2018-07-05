import React from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Login from './src/screens/auth/login';
import BottomNavigation from './src/components/main.js';
import reducers from './src/reducers';

export default class App extends React.Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyCblcG4RA7avuHYpRpHKk-gyDpfn2aL_mI',
            authDomain: 'nutryland-407.firebaseapp.com',
            databaseURL: 'https://nutryland-407.firebaseio.com',
            projectId: 'nutryland-407',
            storageBucket: 'nutryland-407.appspot.com',
            messagingSenderId: '339380257996'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Login />
            </Provider>
        );
    }
}