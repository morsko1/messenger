import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import register from './Register/reducers';
import login from './Login/reducers';
import user from './User/reducers';
import chatsList from './ChatsList/reducers';

export default combineReducers({
    router: routerReducer,
    register,
    login,
    user,
    chatsList
});
