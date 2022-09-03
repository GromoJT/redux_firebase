import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firestoreDB: []
}

export const firestoreSlice = createSlice({
    name: 'fDB',
    initialState,
    reducers:{

    }
});

export const {} = firestoreSlice.actions;

export default firestoreSlice.reducer;