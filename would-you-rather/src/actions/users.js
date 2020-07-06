export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SUBMIT_USER_ANSWER = 'SUBMIT_USER_ANSWER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function submitUserAnswer(answer) {
    return {
        type: SUBMIT_USER_ANSWER,
        answer,
    };
}
