import React, {Suspense, useLayoutEffect} from 'react';
import './styles/index.scss';
import AppRouter from "router/AppRouter";
import Navbar from "components/Navbar/Navbar";
import {useAppDispatch} from "hooks/redux";
import {signIn} from "store/slices/User/ActionCreators";
import {getUserFromToken} from "actions/auth";
import {setError} from "store/slices/User/UserSlice";

const App = () => {

    const dispatch = useAppDispatch();

    useLayoutEffect(() => {

        dispatch(signIn(getUserFromToken()));
        dispatch(setError(''));
    })

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
