import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, IUserState} from "../../model/user/IUser";
import {ContactType} from "../../model/type/ContactType";
import {fetchAuth} from "./authentication.actions";
import {authAPI} from "../../services/API/AuthenticationService";

const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: ''
}

const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isLoading = true
        },
        setCredentialsSuccess: (state) => {
            state.isLoading = false
        },
        setCredentialsError: (state, action: PayloadAction<string>) => {
            state.user = initialState.user
            state.isLoading = false
            state.error = action.payload
        },
        logOut: () => initialState,
    }
})

export default authenticationSlice.reducer
export const {logOut, setCredentials, setCredentialsSuccess, setCredentialsError} = authenticationSlice.actions