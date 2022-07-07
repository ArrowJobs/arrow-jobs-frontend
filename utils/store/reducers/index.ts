import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({userR: userReducer, counterR: counterReducer});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;