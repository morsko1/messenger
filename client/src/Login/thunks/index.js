import * as actionsLogin from '../actions';
import {push} from 'react-router-redux';
import axios from 'axios';
import {getAllUsers} from '~/ChatsList/thunks';
import * as navigation from '~/common/navigation.js';

import {
    setUser,
    connectWebsocket
} from '~/User/actions';

export const login = () => (dispatch, getState) => {
    const state = getState().login;
    const {username, password} = state.input;
    dispatch(actionsLogin.resetInput());
    const body = {
        username,
        password
    };
    dispatch(actionsLogin.loginRequest());
    axios.post('/api/login', body)
        .then((response) => {
            if (!response.data.success) {
                dispatch(actionsLogin.loginFailure({error: response.data.error}));
                return;
            }
            const {token, user} = response.data;
            localStorage.setItem('token', token);
            dispatch(setUser(user));
            dispatch(connectWebsocket(user.username));
            dispatch(actionsLogin.loginSuccess(response.data));
            dispatch(navigation.goToHomePage());
            dispatch(getAllUsers());
        })
        .catch((error) => {
            dispatch(actionsLogin.loginFailure(error));
        });
};
