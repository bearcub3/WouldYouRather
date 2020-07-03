import { LOG_OUT_GLOBAL_STATUS } from '../actions/globalEvent';

export default function globalEventStatus(state = {}, action) {
    switch (action.type) {
        case LOG_OUT_GLOBAL_STATUS:
            return action.logout;
        default:
            return state;
    }
}
