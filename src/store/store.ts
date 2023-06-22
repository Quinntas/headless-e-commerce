/// <reference types="redux-persist" />

import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "@/store/cartSlice";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);