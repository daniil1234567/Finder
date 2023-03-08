import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {rootReducer, RootState} from "./rootReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export const store = configureStore({
    reducer: rootReducer
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector