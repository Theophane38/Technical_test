import { Route, Routes } from 'react-router'
import { routes} from "../config/routes";
import Home from "./Home";
import React from "./React";
import SQL from "./SQL";
import Algo from "./Algo";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.algo} element={<Algo />} />
            <Route path={routes.react} element={<React />} />
            <Route path={routes.sql} element={<SQL />} />
        </Routes>
    )
}

export default AppRouter
