import {
    LOGIN_ATTEMP,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types';

import firebase from '../firebase';
import { AsyncStorage } from 'react-native';

const DEFAULT_AVATAR = 'http://abolkog.com/img/default_user.png';

export const login = ({ username, avatar }) => {
    const userAvatar = avatar.length === 0 ? DEFAULT_AVATAR : avatar;
    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMP });
        //Auth Annones
        firebase.auth().signInAnonymously()
            .then((resp) => {
                const userId = resp.uid;
                const user = {
                    id: userId,
                    username,
                    avatar: userAvatar
                };
                //Save Profile
                firebase.database().ref(`users/${userId}`)
                    .set({ username, avatar: userAvatar})
                    .then(() => finishLogin(dispatch, user ));
            });
        
    }
};

const finishLogin = (dispatch, user ) => {
    AsyncStorage.setItem('user_info', JSON.stringify(user))
        .then(() => {
            dispatch({ type: LOGIN_SUCCESS, payload: user });
        });
}

export const loggedIn = (user) => {
    return ({ type: LOGIN_SUCCESS, payload: user });
}