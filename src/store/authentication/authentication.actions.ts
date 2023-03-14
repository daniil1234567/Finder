import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../../model/user/IUser";
import {AUTH_URL} from "../../utils/constants/serverConstants";

export const fetchAuth = createAsyncThunk(
    'auth',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser>(AUTH_URL)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Cannot load posts: " + e)
        }
    }
)