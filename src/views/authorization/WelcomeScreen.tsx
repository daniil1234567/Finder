import React from 'react';
import {useNavigate} from "react-router-dom";

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <div className={'flex flex-col h-screen w-screen justify-center bg-accentBlue'}>
            <button onClick={() => navigate("/login")}>Присоединиться</button>
            <button onClick={() => navigate("/authentication")}>Уже есть аккакунт? Войти</button>
        </div>
    );
};

export default WelcomeScreen;