import {combineReducers} from "@reduxjs/toolkit";
import authenticationSlice from "./authentication/authentication.slice";


export const rootReducer = combineReducers({
    auth: authenticationSlice,
})

export type RootState = ReturnType<typeof rootReducer>