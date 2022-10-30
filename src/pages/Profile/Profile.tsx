import cls from "./Profile.module.scss";
import ArticleAdd from "components/Article/ArticleAdd/ArticleAdd";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {Fragment, useEffect, useState} from "react";
import SignIn from "components/Login/SignIn/SignIn";
import SignUp from "components/Login/SignUp/SignUp";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {logOut, setError} from "store/slices/User/UserSlice";

interface ProfileProps {
    stageProp?: string;
}

const ArticleAddPage = () => {

    const {user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    return (<Fragment>
        <BlockHeader>
            <span>Добрый день, {user?.login}</span>
            <span onClick={() => dispatch(logOut())}>Выйти</span>
        </BlockHeader>
        <ArticleAdd/>
    </Fragment>);
};

const Profile = ({stageProp = 'signIn'}: ProfileProps) => {


    const {user} = useAppSelector(state => state.userReducer);
    const [stage, setStage] = useState(stageProp);
    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(setError(''));
    }, [])

    return (
        <div className={cls.Profile}>
            {user
                ? <ArticleAddPage />
                : (stage === 'signIn'
                        ? <Fragment>
                            <SignIn />
                            <BlockHeader>Еще нет аккаунта?
                                <span onClick={() => setStage('signUp')}>Зарегистрироваться</span>
                            </BlockHeader>
                          </Fragment>
                        :
                        <Fragment>
                            <SignUp />
                            <BlockHeader>Уже зарегистрированы?
                                <span onClick={() => setStage('signIn')}>Войти</span>
                            </BlockHeader>
                        </Fragment>
                )
            }
        </div>
    );
};

export default Profile;