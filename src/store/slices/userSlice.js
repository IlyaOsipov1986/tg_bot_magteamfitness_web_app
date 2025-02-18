import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    authUser: {
        login: null,
        accessToken: null,
        refreshToken: null,
        id: null,
        isAdmin: false
    },
    listUsers: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser(state, action) {
            state.authUser.login = action.payload.login
            state.authUser.accessToken = action.payload.accessToken
            state.authUser.refreshToken = action.payload.refreshToken
            state.authUser.id = action.payload.id,
            state.authUser.isAdmin = action.payload.isAdmin
        },
        removeAuthUser(state) {
            state.authUser.login = null
            state.authUser.accessToken = null
            state.authUser.refreshToken = null
            state.authUser.id = null
            state.authUser.isAdmin = false
        },
        setListUsers(state, action) {
            state.listUsers = action.payload;
        }
    }
});

export const { setAuthUser, removeAuthUser, setListUsers } = userSlice.actions;
export default userSlice.reducer;