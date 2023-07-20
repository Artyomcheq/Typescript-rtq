import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { albumAPI } from "../services/AlbumServices";
import { postAPI } from "../services/PostService";
import postReducer from "./reducer/PostSlice"

const rootReducer = combineReducers({
    postReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [albumAPI.reducerPath]: albumAPI.reducer
})

export const Store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware, albumAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof Store>
export type AppDispatch = AppStore['dispatch']