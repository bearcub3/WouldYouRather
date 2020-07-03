import {
    _getUsers,
    _getPolls,
    _savePoll,
    _savePollAnswer,
    _saveGlobalStatus,
    _fakeAuthentication,
    _getglobalEventStatus,
} from './_DATA';

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getPolls(),
        _getglobalEventStatus(),
    ]).then(([users, polls, globalEventStatus]) => ({
        users,
        polls,
        globalEventStatus,
    }));
}

export function savePollAnswer(info) {
    return _savePollAnswer(info);
}

export function savePollQuestion(info) {
    return _savePoll(info);
}

export function getAuthentication(info) {
    return _fakeAuthentication(info);
}

export function saveGlobalStatus(info) {
    return _saveGlobalStatus(info);
}
