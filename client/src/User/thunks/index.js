import * as actionsUser from '../actions';
import axios from 'axios';
import {setChats} from '~/ChatsList/actions';

export const getUser = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }
    dispatch(actionsUser.getUserRequest());
    axios.get('/api/verifytoken', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (!response.data.success) {
            localStorage.removeItem('token');
            dispatch(actionsUser.getUserFailure(error));
        }
        dispatch(actionsUser.getUserSuccess());
        dispatch(actionsUser.setUser(response.data.user));
        dispatch(setChats(response.data.user.chats));
    }).catch((error) => {
        localStorage.removeItem('token');
        dispatch(actionsUser.getUserFailure(error));
    });
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(actionsUser.resetUser());
};
