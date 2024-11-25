import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './features/profile/slice';


const store = configureStore({
    reducer: {
        profile: profileSlice,
    },
});

export default store;