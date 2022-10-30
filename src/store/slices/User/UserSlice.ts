import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from "models/IUser";
import {clearToken, createToken, setToken} from "actions/auth";
import {signIn, signUp} from "store/slices/User/ActionCreators";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
            state.user = null;
            state.error = '';
            clearToken();
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        })
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
            if (action.payload === null) return;
            if (action.payload.login && action.payload.password) {
                setToken(createToken(action.payload.login, action.payload.password));
            }
        })
        builder.addCase(signIn.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) state.error = action.payload;
            else state.error = 'Неизвестная ошибка';
        })
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
            if (action.payload.login && action.payload.password) {
                setToken(createToken(action.payload.login, action.payload.password));
            }
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) state.error = action.payload;
            else state.error = 'Неизвестная ошибка';
        })
    }
});

export default userSlice.reducer;

export const {logOut, setError} = userSlice.actions;