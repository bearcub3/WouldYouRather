import { _getUsers, _getPolls, _savePoll, _savePollAnswer } from './_DATA';

export function getInitialData() {
    return Promise.all([_getUsers(), _getPolls()]).then(([users, polls]) => ({
        users,
        polls,
    }));
}

export function savePollAnswer(info) {
    return _savePollAnswer(info);
}

export function savePollQuestion(info) {
    return _savePoll(info);
}
