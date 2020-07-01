import { savePollAnswer, savePollQuestion } from '../utils/api';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const SAVE_POLL_QUESTIONS = 'SAVE_POLL_QUESTIONS';
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER';

export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    };
}

function savePoll(poll) {
    return {
        type: SAVE_POLL_QUESTIONS,
        poll,
    };
}
