import { 
    LOGIN_ATTEMP,
    LOGIN_SUCCESS,
    LOGIN_FAILED
 } from '../actions/types';

const INITIAL_STATE = { loading: false, user: null, error: '' };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_ATTEMP:
            return { ...INITIAL_STATE, loading: true };
        case LOGIN_SUCCESS: 
            return { ...INITIAL_STATE, user: action.payload };
        case LOGIN_FAILED:
            return { ...INITIAL_STATE, error: 'Auth Failed' };
        default: return state;
    }
};