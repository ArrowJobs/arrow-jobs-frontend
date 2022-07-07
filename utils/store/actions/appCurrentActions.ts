import * as types from 'utils/store/action-types';
import { ActionCreator, Action } from 'redux';

//Modal
export interface IAppCurrentActions extends Action {
  type: types.SET_LOGIN | types.SET_LOADING;
  payload: boolean;
}

export const setLoading: ActionCreator<IAppCurrentActions> = (
  payload: boolean
) => ({
  type: types.SET_LOADING,
  payload: payload,
});

export const setLogin: ActionCreator<IAppCurrentActions> = (
  payload: boolean
) => ({
  type: types.SET_LOGIN,
  payload: payload,
});