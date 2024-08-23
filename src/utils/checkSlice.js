import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
    name: "Check",
    initialState: {
        data: false,
    },
    reducers: {
        checkLaunch: (state, action) => {
            state.data = action.payload;
        }
    }
});
export const { checkLaunch } = checkSlice.actions;
export default checkSlice.reducer;