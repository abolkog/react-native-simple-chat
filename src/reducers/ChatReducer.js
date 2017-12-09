import { MESSAGE_RECIVED, FETCHING } from '../actions/types';

const INITIAL_STATE = { fetching: false, messages: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...INITIAL_STATE, fetching: true };
        case MESSAGE_RECIVED: {
            return { ...state, fetching: false, messages: action.payload }
        }
        default: return state;
    }
};