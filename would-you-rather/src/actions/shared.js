import { getInitialData, getAuthentication } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receivePolls } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users, polls }) => {
            dispatch(receiveUsers(users));
            dispatch(receivePolls(polls));
            dispatch(hideLoading());
        });
    };
}

export function handleLogIn(id) {
    return (dispatch) => {
        console.log('id', id);
        dispatch(setAuthedUser(id));
        return getAuthentication(id)
            .then((document.cookie = `username=${id}`))
            .catch((e) => {
                console.warn('Error occours', e);
            });
    };
}
