import * as types from 'utils/store/action-types';
import * as firebaseTypes from 'utils/store/action-types/firebase';
import { ActionCreator, Action } from 'redux';

//Modal
export interface IUserActions extends Action {
	type:
		| types.SET_USER
		| types.REMOVE_USER
		| types.CHECK_CURRENT_USER
		| types.LOGOUT_USER;
	payload?: firebaseTypes.IUser;
}

export const setUser: ActionCreator<IUserActions> = (
	payload: firebaseTypes.IUser
) => ({
	type: types.SET_USER,
	payload: payload,
});
export const removeUser: ActionCreator<IUserActions> = () => ({
	type: types.REMOVE_USER,
});

export const checkCurrentUser: ActionCreator<IUserActions> = () => ({
	type: types.CHECK_CURRENT_USER,
});

export const logoutUser: ActionCreator<IUserActions> = () => ({
	type: types.LOGOUT_USER,
});