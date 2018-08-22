import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import MenuReducer from './MenuReducer';

export default combineReducers({
    auth: AuthReducer,
    signup: SignUpReducer,
    menu: MenuReducer
});
