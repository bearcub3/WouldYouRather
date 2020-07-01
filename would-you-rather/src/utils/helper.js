export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString('en-US');
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function formatPoll(poll, creator) {
    const {
        qid,
        creator,
        questions_0,
        questions_1,
        questions_2,
        timestamp,
    } = poll;
    const { name, avatarURL } = creator;

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
