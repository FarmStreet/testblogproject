import cls from "./Profile.module.scss";
import {useEffect} from "react";
import {useAppDispatch} from "hooks/redux";
import {setError} from "store/slices/User/UserSlice";
import ArticleAddPage from "components/Article/ArticleAddPage/ArticleAddPage";
import LoginPage from "components/Login/LoginPage/LoginPage";
import withConditionalAuth from "components/HOC/withConditionalAuth";

interface ProfileProps {
}

const Profile = ({}: ProfileProps) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setError(''));
    }, [])

    return (
        <div className={cls.Profile}>
            <ArticleAddPage/>
        </div>
    );
}

export default withConditionalAuth({
    isNotAuth: <LoginPage />
})(Profile);