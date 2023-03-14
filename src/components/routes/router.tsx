import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from './routes'
import LoginScreen from "../../views/authorization/registration/LoginScreen";
import {useAppSelector} from '../../store';
import {authAPI, useFetchLoginMutation} from "../../services/API/AuthenticationService";
import {Authentication} from "../../model/authentication/Authentication";
// import {AuthContext} from '../context';

const AppRouter = () => {

    const {...user} = useAppSelector(state => state.auth)

    return (
        user.user !== null
            ? <div>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={<route.element/>} key={route.path}/>
                    )}
                    <Route path="/*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </div>
            :
            <div>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={<route.element/>} key={route.path}/>
                    )}
                    <Route path="/*" element={<Navigate to="/login" replace/>}/>
                </Routes>
            </div>

    );
}

export default AppRouter;