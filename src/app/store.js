import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { RestApi } from "../services/RestApi"


export const store = configureStore({
    reducer:{
        [RestApi.reducerPath] : RestApi.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(RestApi.middleware)
})