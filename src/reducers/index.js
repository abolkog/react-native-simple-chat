import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ChatReducer from './ChatReducer';

export default combineReducers({
    auth: AuthReducer,
    chat: ChatReducer
});