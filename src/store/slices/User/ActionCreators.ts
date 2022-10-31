import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "models/IUser";
import axios from "axios";
import {API_URL} from "app/variables/api";

export const signIn = createAsyncThunk<
    IUser | null,
    IUser | null,
    {
        rejectValue: string
    }>('user/signIn', async (user, {rejectWithValue}) => {
        try {

            if (user === null) return null;

            const response = await axios.get(
                `${API_URL}/users?login=${user.login}&password=${user.password}`);

            if (!response.data[0].login) return rejectWithValue('Неверный логин/пароль');
            return response.data[0];
        } catch (err) {
            return rejectWithValue(err.response.data.error);
        }
    }
);

export const signUp = createAsyncThunk<
    IUser | null,
    IUser,
    {
        rejectValue: string
    }>('user/signUp', async (user, {rejectWithValue}) => {
        try {
            const fetchUser = await axios.get(
                `${API_URL}/users?login=${user.login}`);

            if (fetchUser.data.login || fetchUser.data.length > 0)
                return rejectWithValue('Пользователь с таким логином уже существует');

            const response = await axios.post(
                `${API_URL}/users`, {
                    login: user.login,
                    password: user.password
                });

            if (!response.data.login) rejectWithValue('Неудачная авторизация');
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.error);
        }
    }
);