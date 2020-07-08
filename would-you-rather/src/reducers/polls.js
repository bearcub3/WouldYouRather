import {
    RECEIVE_POLLS,
    SUBMIT_POLL_ANSWER,
    SAVE_POLL_QUESTIONS,
} from '../actions/polls';

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls,
            };
        case SUBMIT_POLL_ANSWER:
            const { answer } = action;

            return {
                ...state,
                [answer.id]: {
                    ...state[answer.id],
                    [answer.userChoice]: {
                        question: state[answer.id][answer.userChoice].question,
                        votes: state[answer.id][
                            answer.userChoice
                        ].votes.concat([answer.authedUser]),
                    },
                },
            };
        case SAVE_POLL_QUESTIONS:
            const { poll } = action;

            return {
                ...state,
                [poll.id]: poll,
            };
        default:
            return state;
    }
}
