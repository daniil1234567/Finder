import React from 'react';

const RegistrationTitleScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Расказажите немного о себе</p>
            <p>Мы рекомендуем писать здесь вашу профессию или должность на последнем месте работы</p>
            <input placeholder={'Заголовок аккаунта'}/>
        </div>
    );
};

export default RegistrationTitleScreen;