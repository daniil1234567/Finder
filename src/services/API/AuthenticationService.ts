import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {SERVER_BASE_URL} from "../../utils/constants/serverConstants";
import {IUser} from "../../model/user/IUser";
import {Authentication} from "../../model/authentication/Authentication";
import {
    logOut,
    setCredentials,
    setCredentialsError,
    setCredentialsSuccess
} from "../../store/authentication/authentication.slice";
import {useAppDispatch} from "../../store";
import {AppDispatch} from "../../store";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({baseUrl: SERVER_BASE_URL}),
    endpoints: (build) => ({
        fetchLogin: build.mutation<IUser, Authentication>({
            query: (authentication: Authentication) => ({
                url: '/auth',
                method: 'POST',
                credentials: 'include',
                body: authentication,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setCredentials(data))
                    dispatch(setCredentialsSuccess())
                } catch (err) {
                    dispatch(setCredentialsError(String(err)))
                }
            },
            transformResponse: (response: { data: { user: IUser } }) => {
                return response.data.user
            }
        }),
        fetchLogout: build.query({
            query: () => ({
                url: '/auth/logout',
                method: 'GET',
                credentials: 'include',
                onSuccess: async (dispatch: any) => {
                    dispatch(logOut())
                },
            }),
        }),
    })
})

export const {
    useFetchLoginMutation,
    useFetchLogoutQuery,
    useLazyFetchLogoutQuery,
} = authAPI
