import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import taskReducer from './TaskSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
    },
})

export default store