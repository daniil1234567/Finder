import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from './routes'
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
        true//user !== null0
            ? <div>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={<route.element />} key={route.path}/>
                    )}
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
                </Routes>
            </div>

    );
}

export default AppRouter;