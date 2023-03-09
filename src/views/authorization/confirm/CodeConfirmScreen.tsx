import React from 'react';

const CodeConfirmScreen = () => {
    return (
        <div className={'flex flex-col h-screen w-screen justify-center items-center bg-accentBlue'}>
            <p>Подтвердите номер</p>
            <p>Мы отправим на номер смс с кодом подтверждения</p>
            <input placeholder={'....'} className={'w-1/2'}/>
        </div>
    );
};

export default CodeConfirmScreen;