import {useAppDispatch, useAppSelector} from "hooks/redux";
import {Fragment} from "react";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {logOut} from "store/slices/User/UserSlice";
import ArticleAdd from "components/Article/ArticleAdd/ArticleAdd";

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

export default ArticleAddPage;