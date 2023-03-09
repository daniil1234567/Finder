import React from 'react';

const PasswordSettingsScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Придумайте наденый пароль</p>
            <p>Пароль должен быть безопастным для того чтобы никто не мог втойти в вашу учеьную запись</p>
            <input placeholder={'Пароль'}/>
            <input placeholder={'Повторите пароль'}/>
            <p>Пароль это конфиденциальная информация, поэтому не сообщайте его никому</p>
        </div>
    );
};

export default PasswordSettingsScreen;