import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    token: string;
    user: {};
}

const initialState: AuthState = {
    token: null,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.token = localStorage.getItem('token');
        },
    }
})

export const { logIn } = authSlice.actions;

export default authSlice.reducer;
