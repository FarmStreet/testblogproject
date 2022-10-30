import cls from "./SignUp.module.scss";
import classNames from "classnames";
import {Fragment, useState} from "react";
import {submitForm} from "actions/validate";
import BlockItem from "components/Block/BlockItem/BlockItem";
import BlockForm from "components/Block/BlockForm/BlockForm";
import Input from "components/Shared/Input/Input";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {signUp} from "store/slices/User/ActionCreators";
import {setError} from "store/slices/User/UserSlice";

interface SignUpProps {
    className?: string;
}

const SignUp = ({className}: SignUpProps) => {

    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.userReducer);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const submitAuth = (): void => {

        if (password !== repeatPassword) {
            dispatch(setError('Пароли не совпадают'));
            return;
        }

        submitForm(
            [
                {
                    value: login,
                    setValue: (msg) => setLogin(msg),
                    minValue: 5,
                    maxValue: 25,
                    name: 'Логин'
                },
                {
                    value: password,
                    setValue: (msg) => setPassword(msg),
                    minValue: 5,
                    maxValue: 60,
                    name: 'Пароль'
                },
                {
                    value: repeatPassword,
                    setValue: (msg) => setPassword(msg),
                    minValue: 5,
                    maxValue: 60,
                    name: 'Повторный пароль'
                },
            ],
            (msg) => dispatch(setError(msg)),
            () => dispatch(signUp({
                login: login.trim(),
                password: password.trim(),
            })),
        )
    }

    return (
        <Fragment>
            <BlockHeader>Регистрация</BlockHeader>
            <BlockItem className={classNames(cls.SignUp, className)}>
                <BlockForm onSubmit={submitAuth} error={error} buttonName="Зарегистрироваться">
                    <Input placeholder="Логин"
                           required value={login} onChange={(e) => setLogin(e.target.value)} />
                    <Input placeholder="Пароль" type="password"
                           required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="Повторите пароль" type="password"
                           required value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                </BlockForm>
            </BlockItem>
        </Fragment>
    );
};

export default SignUp;