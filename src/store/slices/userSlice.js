import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login: null,
    accessToken: null,
    refreshToken: null,
    id: null,
    isAdmin: false
};

const userSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setUser(state, action) {
            state.login = action.payload.login
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.id = action.payload.id,
            state.isAdmin = action.payload.isAdmin
        },
        removeUser(state) {
            state.login = null
            state.accessToken = null
            state.refreshToken = null
            state.id = null
            state.isAdmin = false
        }
    }
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;