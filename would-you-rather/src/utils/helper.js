export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString('en-US');
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatPoll(poll, user) {
    const {
        qid,
        creator,
        questions_0,
        questions_1,
        questions_2,
        timestamp,
    } = poll;
    const { name, avatarURL } = user;

    return {
        qid,
        creator,
        questions_0,
        questions_1,
        questions_2,
        timestamp,
        name,
        avatar: avatarURL,
    };
}

export function categorizePolls(poll, authedUser, users) {
    const {
        id,
        creator,
        timestamp,
        questions_0,
        questions_1,
        questions_2,
    } = poll;
    const { answered } = users[authedUser];

    return {
        id,
        timestamp,
        creator: users[creator].name,
        avatar: users[creator].avatarURL,
        questions_0,
        questions_1,
        questions_2,
        answer: answered[id],
        answered: !!answered[id],
    };
}
