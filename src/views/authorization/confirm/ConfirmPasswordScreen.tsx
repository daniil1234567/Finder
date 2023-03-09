import React from 'react';

const ConfirmPasswordScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Введите пароль</p>
            <p>Введите пароль</p>
            <input placeholder={'Пароль'} className={'w-1/2'}/>
        </div>
    );
};

export default ConfirmPasswordScreen;