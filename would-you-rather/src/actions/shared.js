import {
    getInitialData,
    getAuthentication,
    savePollAnswer,
} from '../utils/api';
import { receiveUsers, submitUserAnswer } from '../actions/users';
import { receivePolls, sendPollAnswer } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, polls }) => {
            dispatch(showLoading());
            dispatch(receiveUsers(users));
            dispatch(receivePolls(polls));
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

export function handleSendPollAnswer(id, userChoice) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());
        dispatch(sendPollAnswer({ id, authedUser, userChoice }));
        dispatch(submitUserAnswer({ id, authedUser, userChoice }));
        dispatch(hideLoading());
        return savePollAnswer({ id, authedUser, userChoice }).catch((e) => {
            console.warn('Error in handleSendPollAnswer: ', e);
            alert('There was an error. Try again.');
        });
    };
}
