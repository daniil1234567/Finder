import React from 'react';

const RegistrationMainInformationScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Заполните данные о себе</p>
            <p>Рекомендуем использовать свое настоящие имя и фамилию для того, чтобы вас было легче найти</p>
            <input placeholder={'Имя профиля'}/>
            <p>Дата рождения</p>
        </div>
    );
};

export default RegistrationMainInformationScreen;