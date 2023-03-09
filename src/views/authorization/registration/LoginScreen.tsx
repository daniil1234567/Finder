import React from 'react';

const LoginScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <input placeholder={'Номер телефона'} className={'w-1/2'}/>
        </div>
    );
};

export default LoginScreen;