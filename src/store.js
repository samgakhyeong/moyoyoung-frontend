import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'moyoyoung',
    storage,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        accessToken: null,
        refreshToken: null,
        username: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        logout: (state) => { 
            state.accessToken = null;
            state.refreshToken = null;
            state.username = null;
        },
    },
});

export const isLoggedIn = (state) => {
    return state.auth.username !== null;
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
});

export const persistor = persistStore(store);
export const { setAccessToken, setRefreshToken, setUsername, logout } = authSlice.actions;
export default store;
