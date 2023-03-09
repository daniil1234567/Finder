import React from 'react';

const Authentication = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <input placeholder={'Email или телефон'}/>
            <input placeholder={'Пароль'}/>
            <button>Войти</button>
            <p>Забыли свои учетные данные? Получите помощь со во входом в систему </p>
        </div>
    );
};

export default Authentication;