import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {publicRoutes, privateRoutes} from './routes'
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../store";
// import {AuthContext} from '../context';

const AppRouter = () => {
    // const {isAuth, isLoading} = useContext(AuthContext)
    //
    // if (isLoading) {
    //     return <Loader/>
    // }

    const {user} = useTypedSelector((state) => state.auth)

    return (
        user !== null
            ? <div>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={<route.element />} key={route.path}/>
                    )
                    }
                    <Route path="/*" element={<Navigate to="/home" replace/>}/>
                </Routes>
            </div>
            :
            <div>
                <Routes>
                    {
                        publicRoutes.map(route =>
                            <Route path={route.path} element={<route.element />} key={route.path}/>
                        )
                    }
                    <Route path="/*" element={<Navigate to="/chat" replace/>}/>
                </Routes>
            </div>

    );
}

export default AppRouter;