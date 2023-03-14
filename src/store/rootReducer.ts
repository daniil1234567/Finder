import {combineReducers} from "@reduxjs/toolkit";
import authenticationSlice from "./authentication/authentication.slice";
import {authAPI} from "../services/API/AuthenticationService";


export const rootReducer = combineReducers({
    auth: authenticationSlice,
    [authAPI.reducerPath]: authAPI.reducer,
})