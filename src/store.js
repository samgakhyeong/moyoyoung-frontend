// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        userId: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const { setToken, setUserId } = authSlice.actions;

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default store;
