import { createSlice } from "@reduxjs/toolkit";

const guidesSlice = createSlice({
    name: 'guides',
    initialState: {
        guides: [],
    },
    reducers: {
        addGuide(state, action) {
            state.guides.push({
                title: action.payload.title,
                contents: action.payload.contents,
                mainGuide: false,
                created: new Date().toISOString(),
            })
        },
        removeGuide(state, action) {
            state.guides = state.guides.filter(todo => todo.id !== action.payload.id);
        }
    }
})

export default guidesSlice;