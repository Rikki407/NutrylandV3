import React from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Expo from 'expo';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/auth/login';
import reducers from './src/reducers';
import MainScreen from './src/screens/home/main';
import SignupScreen from './src/screens/auth/signup';
import { Lunch } from './src/screens/home/tabs/lunch';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({ loading: false });
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
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <Provider store={store}>
                <AppStackNavigator />
            </Provider>
        );
    }
}
const AppStackNavigator = createStackNavigator({
    // Login: LoginScreen,
    Home: {
        screen: MainScreen,
        navigationOptions: {
            header: null
        }
    },
    SignUp: SignupScreen
});
