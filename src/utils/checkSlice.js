import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
    name: "Check",
    initialState: {
        data: false,
        popup:false,
    },
    reducers: {
        checkLaunch: (state, action) => {
            state.data = action.payload;
        },
        checkPopup: (state, action) => {
            state.popup = action.payload;
        }
    }
});
export const { checkLaunch,checkPopup } = checkSlice.actions;
export default checkSlice.reducer;