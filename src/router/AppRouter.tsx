import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {RouteConfig} from "./RouteConfig";
import LoaderPage from "pages/LoaderPage/LoaderPage";

const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map(
            ({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<LoaderPage />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ),
        )}
    </Routes>
);

export default AppRouter;
