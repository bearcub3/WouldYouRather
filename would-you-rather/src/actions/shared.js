import { getInitialData, getAuthentication } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receivePolls } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const AUTHED_ID = 'idris_elba';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users, polls }) => {
            dispatch(receiveUsers(users));
            dispatch(receivePolls(polls));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        });
    };
}

export function handleLogIn(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
        return getAuthentication(id).catch((e) => {
            console.warn('Error occours', e);
        });
    };
}
