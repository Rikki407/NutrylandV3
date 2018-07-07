import React from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/auth/login';
import reducers from './src/reducers';
import MainScreen from './src/screens/home/main';
import SignupScreen from './src/screens/auth/signup';
import ToastScreen from './src/screens/auth/toast';

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
            <Root>
                <Provider store={store}>
                    <AppStackNavigator />
                </Provider>
            </Root>
        );
    }
}
const AppStackNavigator = createStackNavigator({
    Toast: ToastScreen,
    Login: LoginScreen,
    SignUp: SignupScreen,
    Home: MainScreen
});
