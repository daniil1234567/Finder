import React from 'react';

const NameConfirmScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Укажите имя профиля</p>
            <p>Введите имя профиля указанное на вашей странице доступ, к которой вы хотите восстановить</p>
            <input placeholder={'Имя профиля'} className={'w-1/2'}/>
        </div>
    );
};

export default NameConfirmScreen;