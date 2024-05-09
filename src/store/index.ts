import {configureStore} from '@reduxjs/toolkit';
import usersApi from '@/services/users';

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
