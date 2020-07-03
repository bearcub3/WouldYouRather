import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from './authedUser';
import globalEventStatus from './globalEvent';
import users from './users';
import polls from './polls';

export default combineReducers({
    globalEventStatus,
    authedUser,
    users,
    polls,
    loadingBar: loadingBarReducer,
});
