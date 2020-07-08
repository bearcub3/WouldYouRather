import {
    getInitialData,
    getAuthentication,
    savePollAnswer,
    savePollData,
} from '../utils/api';

import {
    receiveUsers,
    submitUserAnswer,
    submitUserPoll,
} from '../actions/users';

import { receivePolls, sendPollAnswer, savePoll } from '../actions/polls';
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
        const userAnswer = { id, authedUser, userChoice };

        dispatch(showLoading());
        dispatch(sendPollAnswer(userAnswer));
        dispatch(submitUserAnswer(userAnswer));
        dispatch(hideLoading());

        return savePollAnswer(userAnswer).catch((e) => {
            console.warn('Error in handleSendPollAnswer: ', e);
            alert('There was an error. Try again.');
        });
    };
}

export function handleSavePoll(q0, q1, q2) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        function dipatchPollReducers(param) {
            dispatch(savePoll(param));
            dispatch(submitUserPoll(param));
        }

        dispatch(showLoading());

        return savePollData({
            q0,
            q1,
            q2,
            authedUser,
        })
            .then((poll) => dipatchPollReducers(poll))
            .then(() => dispatch(hideLoading()));
    };
}
