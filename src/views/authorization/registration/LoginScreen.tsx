import React from 'react';
import {Authentication} from "../../../model/authentication/Authentication";
import {useFetchLoginMutation} from "../../../services/API/AuthenticationService";

const LoginScreen = () => {

    const [login, {isLoading, error, isSuccess, isError}] = useFetchLoginMutation()
    const loginAction = (autentication: Authentication) => {
        login(autentication)
    }

    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <input placeholder={'Номер телефона'} className={'w-1/2'}/>
        </div>
    );
};


export default LoginScreen;