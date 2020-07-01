import { _getUsers, _getPolls, _savePoll, _saveAnswer } from './_DATA';

export function getInitialData() {
    return Promise.all([_getUsers(), _getPolls()]).then(([users, polls]) => ({
        users,
        polls,
    }));
}

export function savePollAnswer(info) {
    return _saveAnswer(info);
}

export function savePollQuestion(info) {
    return _savePoll(info);
}
