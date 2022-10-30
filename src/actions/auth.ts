import {IUser} from "models/IUser";

export const createToken = (login: string, password: string) => btoa(login + '.' + password);

export const setToken = (token: string) => localStorage.setItem('token', token);

const getToken = (): string => localStorage.getItem('token')  || '';

export const clearToken = () => localStorage.setItem('token', '');

export const getUserFromToken = ():IUser|null => {

    let data = atob(getToken()).split('.');

    if (data.length < 2) return null;

    return {
        login: data[0],
        password: data[1]
    }
}