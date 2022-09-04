import { createSlice } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';



  
const initialState = {
    user:{}
    
}

export const userSlice = createSlice({
    name: 'UserReducer',
    initialState,
    reducers:{

       createUser: (state,action)=>{

       }

       
    }
});

export const {increment} = userSlice.actions;

export default userSlice.reducer;