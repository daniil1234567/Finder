import {createSlice} from "@reduxjs/toolkit";


const authenticationSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
        user: null,
        token: null,
        surname: null,
        name: null,
        avatar: null,
        isAuth: false
    },
    reducers: {
        setCredentials: (state, action) => {
            const {login, jwtToken, userId} = action.payload;
            state.user = login;
            state.token = jwtToken;
            state.id = userId;
            state.isAuth = true;
        },
        logOut: (state) => {
            state.id = null;
            state.user = null;
            state.token = null;
            state.name = null;
            state.surname = null;
            state.avatar = null;
        },
        additionalInfo: (state, action) => {
            const {name, surname, avatar} = action.payload;
            state.name = name;
            state.surname = surname;
            state.avatar = avatar;
        }
    },

})

export default authenticationSlice.reducer
export const { setCredentials, logOut, additionalInfo } = authenticationSlice.actions