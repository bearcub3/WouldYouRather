let users = {
    amanda_seyfried: {
        id: 'amanda_seyfried',
        name: 'Amanda SeyFried',
        avatarURL: '../assets/images/amanda_avatar.jpg',
        questions: ['sxwoy62xhg84mvcb5jo8x', 'daxuh2znt8vquvacvhh2s'],
        answered: {
            sxwoy62xhg84mvcb5jo8x: 'questions_0',
            daxuh2znt8vquvacvhh2s: 'questions_0',
            p3ybk5ed2hkc70l00549: 'questions_0',
            ksnyqn1anhevvftlk7rwi: 'questions_1',
            h5l2u84zun1lzkkbchgwx: 'questions_1',
            vv8do8ddnibhsscmgi4ys: 'questions_1',
        },
    },
    idris_elba: {
        id: 'idris_elba',
        name: 'Idris Elba',
        avatarURL: '../assets/images/idris_avatar.jpg',
        questions: ['vv8do8ddnibhsscmgi4ys'],
        answered: {
            sxwoy62xhg84mvcb5jo8x: 'questions_1',
            daxuh2znt8vquvacvhh2s: 'questions_1',
            p3ybk5ed2hkc70l00549: 'questions_2',
            ksnyqn1anhevvftlk7rwi: 'questions_1',
            h5l2u84zun1lzkkbchgwx: 'questions_0',
            vv8do8ddnibhsscmgi4ys: 'questions_1',
        },
    },
    louise_brodeur: {
        id: 'louise_brodeur',
        name: 'Louise Brodeur',
        avatarURL: '../assets/images/louise_avatar.jpg',
        questions: ['vqtjek81va8sfuui0bbgjk', 'h5l2u84zun1lzkkbchgwx'],
        answered: {
            sxwoy62xhg84mvcb5jo8x: 'questions_1',
            daxuh2znt8vquvacvhh2s: 'questions_1',
            vv8do8ddnibhsscmgi4ys: 'questions_0',
        },
    },
    henry_james: {
        id: 'henry_james',
        name: 'Henry James',
        avatarURL: '../assets/images/henry_avatar.jpg',
        questions: ['p3ybk5ed2hkc70l00549', 'ksnyqn1anhevvftlk7rwi'],
        answered: {
            sxwoy62xhg84mvcb5jo8x: 'questions_0',
            daxuh2znt8vquvacvhh2s: 'questions_1',
            p3ybk5ed2hkc70l00549: 'questions_1',
            ksnyqn1anhevvftlk7rwi: 'questions_0',
            h5l2u84zun1lzkkbchgwx: 'questions_0',
            vv8do8ddnibhsscmgi4ys: 'questions_0',
        },
    },
};

let polls = {
    vqtjek81va8sfuui0bbgjk: {
        id: 'vqtjek81va8sfuui0bbgjk',
        creator: 'louise_brodeur',
        questions_0: {
            question: 'Would you rather be a front-end developer',
            votes: [],
        },
        questions_1: {
            question: 'Would you rather be a back-end developer',
            votes: [],
        },
        questions_2: {
            question: 'Would you rather be a full stack developer',
            votes: [],
        },
        timestamp: 1593851945000,
    },
    sxwoy62xhg84mvcb5jo8x: {
        id: 'sxwoy62xhg84mvcb5jo8x',
        creator: 'amanda_seyfried',
        questions_0: {
            question: 'Would you rather go for a jog',
            votes: ['henry_james', 'amanda_seyfried'],
        },
        questions_1: {
            question: 'Would you rather go for swimming',
            votes: ['louise_brodeur', 'idris_elba'],
        },
        timestamp: 1593879995000,
    },
    daxuh2znt8vquvacvhh2s: {
        id: 'daxuh2znt8vquvacvhh2s',
        creator: 'amanda_seyfried',
        questions_0: {
            question: 'Would you rather be a dog person',
            votes: ['amanda_seyfried'],
        },
        questions_1: {
            question: 'Would you rather be a cat person',
            votes: ['henry_james', 'louise_brodeur', 'idris_elba'],
        },
        timestamp: 1593945650000,
    },
    p3ybk5ed2hkc70l00549: {
        id: 'p3ybk5ed2hkc70l00549',
        creator: 'henry_james',
        questions_0: {
            question: 'Would you rather be a christian',
            votes: ['amanda_seyfried'],
        },
        questions_1: {
            question: 'Would you rather be a buddhist',
            votes: ['henry_james'],
        },
        questions_2: {
            question: 'Would you rather be a atheist',
            votes: ['idris_elba'],
        },
        timestamp: 1594019530000,
    },
    ksnyqn1anhevvftlk7rwi: {
        id: 'ksnyqn1anhevvftlk7rwi',
        creator: 'henry_james',
        questions_0: {
            question: 'Would you rather eat cricket',
            votes: ['henry_james'],
        },
        questions_1: {
            question: 'Would you rather eat a live octopus',
            votes: ['amanda_seyfried', 'idris_elba'],
        },
        timestamp: 1594047097000,
    },
    h5l2u84zun1lzkkbchgwx: {
        id: 'h5l2u84zun1lzkkbchgwx',
        creator: 'louise_brodeur',
        questions_0: {
            question: 'Would you rather skip breakfast',
            votes: ['henry_james', 'idris_elba'],
        },
        questions_1: {
            question: 'Would you rather skip dinner',
            votes: ['amanda_seyfried'],
        },
        timestamp: 1594103352000,
    },
    vv8do8ddnibhsscmgi4ys: {
        id: 'vv8do8ddnibhsscmgi4ys',
        creator: 'idris_elba',
        questions_0: {
            question: 'Would you rather a villain',
            votes: ['henry_james', 'louise_brodeur'],
        },
        questions_1: {
            question: 'Would you rather a hero',
            votes: ['amanda_seyfried', 'idris_elba'],
        },
        timestamp: 1594156314000,
    },
};

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...users }), 1000);
    });
}

export function _getPolls() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...polls }), 1000);
    });
}

function generateUID() {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

function formatQuestion(newPoll) {
    const { q0, q1, q2, authedUser } = newPoll;

    return {
        id: generateUID(),
        creator: authedUser,
        questions_0: {
            question: 'Would you rather ' + q0,
            votes: [],
        },
        questions_1: {
            question: 'Would you rather ' + q1,
            votes: [],
        },
        questions_2: {
            question: q2 === '' ? undefined : 'Would you rather ' + q2,
            votes: [],
        },
        timestamp: Date.now(),
    };
}

export function _savePoll(poll) {
    return new Promise((res, rej) => {
        const formattedQuestion = formatQuestion(poll);

        const { creator } = formattedQuestion;

        setTimeout(() => {
            polls = {
                ...polls,
                [formattedQuestion.id]: formattedQuestion,
            };

            users = {
                ...users,
                [creator]: {
                    ...users[creator],
                    questions: users[creator].questions.concat([
                        formattedQuestion.id,
                    ]),
                },
            };

            res(formattedQuestion);
        }, 100);
    });
}

export function _savePollAnswer(answer) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            polls = {
                ...polls,
                [answer.id]: {
                    ...polls[answer.id],
                    [answer.userChoice]: {
                        question: polls[answer.id][answer.userChoice].question,
                        votes: polls[answer.id][
                            answer.userChoice
                        ].votes.concat([answer.authedUser]),
                    },
                },
            };
            users = {
                ...users,
                [answer.authedUser]: {
                    ...users[answer.authedUser],
                    answered: {
                        ...users[answer.authedUser].answered,
                        [answer.id]: answer.userChoice,
                    },
                },
            };
            res();
        }, 300);
    });
}

export function _fakeAuthentication(id) {
    return new Promise((res, rej) => {
        setTimeout(() => res({ authedUser: id }, 1000));
    });
}
