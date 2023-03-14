import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authAPI} from "../services/API/AuthenticationService";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authAPI.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
