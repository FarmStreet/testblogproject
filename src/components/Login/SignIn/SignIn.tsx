import cls from "./SignIn.module.scss";
import BlockItem from "components/Block/BlockItem/BlockItem";
import Input from "components/Shared/Input/Input";
import classNames from "classnames";
import BlockForm from "components/Block/BlockForm/BlockForm";
import {Fragment, useState} from "react";
import {submitForm} from "actions/validate";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {signIn} from "store/slices/User/ActionCreators";
import {setError} from "store/slices/User/UserSlice";

interface SignInProps {
    className?: string;
}

const SignIn = ({className}: SignInProps) => {

    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.userReducer);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const submitAuth = (): void => {

        submitForm(
            [
                {
                    value: login,
                    setValue: (msg) => setLogin(msg),
                    minValue: 0,
                    maxValue: 9999,
                    name: 'Логин',
                    customRegExp: /^[A-Z\d]+$/i
                },
                {
                    value: password,
                    setValue: (msg) => setPassword(msg),
                    minValue: 0,
                    maxValue: 9999,
                    name: 'Пароль'
                },
            ],
            (msg) => dispatch(setError(msg)),
            (() => dispatch(signIn({
                login: login.trim(),
                password: password.trim()
            })))
        )
    }

    return (
        <Fragment>
            <BlockHeader>Авторизация</BlockHeader>
            <BlockItem className={classNames(cls.SignIn, className)}>
                <BlockForm onSubmit={submitAuth} error={error} buttonName="Войти">
                    <Input placeholder="Логин"
                           required value={login} onChange={(e) => setLogin(e.target.value)} />
                    <Input placeholder="Пароль" type="password"
                           required value={password} onChange={(e) => setPassword(e.target.value)} />
                </BlockForm>
            </BlockItem>
        </Fragment>
    );
};

export default SignIn;