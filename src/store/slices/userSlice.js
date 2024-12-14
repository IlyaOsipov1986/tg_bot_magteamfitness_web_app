import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    accessToken: null,
    refreshToken: null,
    id: null
};

const userSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null
            state.accessToken = null
            state.refreshToken = null
            state.id = null
        }
    }
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;