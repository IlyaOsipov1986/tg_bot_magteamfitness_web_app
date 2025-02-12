import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import guidesReducer from "./slices/guidesSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        guides: guidesReducer,
    }
})