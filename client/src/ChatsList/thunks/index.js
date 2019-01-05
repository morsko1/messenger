import * as actionsChatList from '../actions';
import axios from 'axios';

export const getAllUsers = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }
    axios.get('/api/getallusers', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        dispatch(actionsChatList.setUsers(response.data.users));
    }).catch((error) => {
        console.log('error =', error);
    });

}

export const startChat = (participants) => (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const body = {
        participants
    }
    // todo: send request only if doesn't exist
    axios.post('/api/startchat', body, headers).then((response) => {
        console.log('response =', response);
    }).catch((error) => {
        console.log('error =', error);
    });
}
