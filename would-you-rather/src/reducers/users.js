import { RECEIVE_USERS, SUBMIT_USER_ANSWER } from '../actions/users';

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
        default:
            return state;
    }
}
