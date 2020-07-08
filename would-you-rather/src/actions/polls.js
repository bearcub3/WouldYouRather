export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const SAVE_POLL_QUESTIONS = 'SAVE_POLL_QUESTIONS';
export const SUBMIT_POLL_ANSWER = 'SUBMIT_POLL_ANSWER';

export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    };
}

export function sendPollAnswer(answer) {
    return {
        type: SUBMIT_POLL_ANSWER,
        answer,
    };
}

export function savePoll(poll) {
    return {
        type: SAVE_POLL_QUESTIONS,
        poll,
    };
}
