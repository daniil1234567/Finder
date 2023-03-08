import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppRouter from "./components/routes/router";

export const App: React.FC<{}> = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>

        </>
    );
};