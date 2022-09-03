import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice';
import firestoreSlice from './reducers/firestoreSlice'
export const store = configureStore({
    reducer:{
        counter: counterSlice,
        firestoreDB: firestoreSlice,
    }
});