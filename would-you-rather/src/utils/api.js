import {
    _getUsers,
    _getPolls,
    _savePoll,
    _savePollAnswer,
    _fakeAuthentication,
} from './_DATA';

export function getUsersData() {
    return Promise.all([_getUsers()]).then(([users]) => ({
        users,
    }));
}

export function getPollsData() {
    return Promise.all([_getPolls()]).then(([polls]) => ({
        polls,
    }));
}

export function savePollAnswer(info) {
    return _savePollAnswer(info);
}

export function savePollData(info) {
    return _savePoll(info);
}

export function getAuthentication(info) {
    return _fakeAuthentication(info);
}
