//Modal Action Types
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export type HIDE_MODAL = typeof HIDE_MODAL;
export type SHOW_MODAL = typeof SHOW_MODAL;

//Loading
export const LOAD_APP_LOADING = 'LOAD_APP_LOADING';
export type LOAD_APP_LOADING = typeof LOAD_APP_LOADING;

//Combined export
type Types = LOAD_APP_LOADING | SHOW_MODAL | HIDE_MODAL;

//Authentication
export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';
export type GOOGLE_SIGN_IN = typeof GOOGLE_SIGN_IN;

export const SET_USER = 'SET_USER';
export type SET_USER = typeof SET_USER;

export const LOGOUT_USER = 'LOGOUT_USER';
export type LOGOUT_USER = typeof LOGOUT_USER;

export const REMOVE_USER = 'REMOVE_USER';
export type REMOVE_USER = typeof REMOVE_USER;

//App
export const SET_LOADING = 'SET_LOADING';
export type SET_LOADING = typeof SET_LOADING;

export const SET_LOGIN = 'SET_LOGIN';
export type SET_LOGIN = typeof SET_LOGIN;

export const CHECK_CURRENT_USER = 'CHECK_CURRENT_USER';
export type CHECK_CURRENT_USER = typeof CHECK_CURRENT_USER;

export default Types;