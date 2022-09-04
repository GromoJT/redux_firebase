import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice';
import firestoreSlice from './reducers/firestoreSlice'
import userSlice from './reducers/userSlice';
export const store = configureStore({
    reducer:{
        counter: counterSlice,
        user : userSlice,
        firestoreDB: firestoreSlice,
    }
});