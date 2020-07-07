import { RECEIVE_POLLS, SUBMIT_POLL_ANSWER } from '../actions/polls';

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
                        votes: state[answer.id][
                            answer.userChoice
                        ].votes.concat([answer.authedUser]),
                    },
                },
            };
        default:
            return state;
    }
}
