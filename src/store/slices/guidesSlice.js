import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guides: {},
    guidesReq: false
};

const guidesSlice = createSlice({
    name: "guides",
    initialState,
    reducers: {
        setGuides(state, action) {
            const newGuide = action.payload;
            state.guides = newGuide;
        },
        runRequestGuides(state) {
            state.guidesReq = true;
        },
        clearObjGuide(state) {
            state.guides = {};
            state.guidesReq = false;
        },
    }
})

export const { setGuides, clearObjGuide, runRequestGuides } = guidesSlice.actions;
export default guidesSlice.reducer;