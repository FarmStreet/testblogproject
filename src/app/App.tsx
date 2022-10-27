import React, { Suspense } from 'react';
import './styles/index.scss';
import AppRouter from "router/AppRouter";
import Navbar from "components/Navbar/Navbar";

const App = () => {

    return (
        <div className="App">
            <Navbar />
            <Suspense fallback="">
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
