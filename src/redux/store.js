import { configureStore } from '@reduxjs/toolkit';
import { coinrankingApi } from '../services/coinrankingApi';

export default configureStore({
    reducer:{
        [coinrankingApi.reducerPath]: coinrankingApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinrankingApi.middleware),

});