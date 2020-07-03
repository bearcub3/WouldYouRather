import { getInitialData, getAuthentication } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receivePolls } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';
import { receiveGlobalEventStatus } from '../actions/globalEvent';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users, polls, globalEventStatus }) => {
            dispatch(receiveUsers(users));
            dispatch(receivePolls(polls));
            dispatch(receiveGlobalEventStatus(globalEventStatus));
            dispatch(hideLoading());
        });
    };
}

export function handleAuthentication(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
        return getAuthentication(id).catch((e) => {
            console.warn('Error occours', e);
        });
    };
}