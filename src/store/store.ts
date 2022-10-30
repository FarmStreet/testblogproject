import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {articleAPI} from "store/services/ArticleService";
import userReducer from "store/slices/User/UserSlice";


const rootReducer = combineReducers({
    [articleAPI.reducerPath]: articleAPI.reducer,
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(articleAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']