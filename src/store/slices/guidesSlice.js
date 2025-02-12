import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guides: {},
};

const guidesSlice = createSlice({
    name: "guides",
    initialState,
    reducers: {
        setGuides(state, action) {
            const newGuide = action.payload;
            state.guides = newGuide;
        },
        clearObjGuide(state) {
            state.guides = {};
            state.guidesReq = false;
        },
    }
})

export const { setGuides, clearObjGuide } = guidesSlice.actions;
export default guidesSlice.reducer;