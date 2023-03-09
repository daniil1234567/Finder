import React from 'react';

const UsernameConfirmScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Восстановление доступа</p>
            <p>Укажите Email или номер телефона, которые вы использовали для входа в приложение</p>
            <input placeholder={'Email или телефон'} className={'w-1/2'}/>
        </div>
    );
};

export default UsernameConfirmScreen;