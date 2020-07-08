import {
    RECEIVE_USERS,
    SUBMIT_USER_ANSWER,
    SUBMIT_USER_POLL,
} from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case SUBMIT_USER_ANSWER:
            const { answer } = action;
            return {
                ...state,
                [answer.authedUser]: {
                    ...state[answer.authedUser],
                    answered: {
                        ...state[answer.authedUser].answered,
                        [answer.id]: answer.userChoice,
                    },
                },
            };
        case SUBMIT_USER_POLL:
            const { poll } = action;

            return {
                ...state,
                [poll.creator]: {
                    ...state[poll.creator],
                    questions: state[poll.creator].questions.concat([poll.id]),
                },
            };
        default:
            return state;
    }
}
