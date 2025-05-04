import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signedupUser: JSON.parse(localStorage.getItem('signedupUser')) || {}
}

const signedupUserSlice = createSlice({
    name: "signedupUser",
    initialState: initialState,
    reducers: {
        setSignedupUser: (state, action) => {
            state.signedupUser = action.payload;
        }
    }
});

export const { setSignedupUser } = signedupUserSlice.actions;

export default signedupUserSlice.reducer;