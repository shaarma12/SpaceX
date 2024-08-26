import { createSlice } from "@reduxjs/toolkit";

const popupDataSlice = createSlice({
    name: "popupData",
    initialState: {
        data: [],
    },
    reducers: {
        popData: (state, action) => {
            state.data = action.payload;
        }
    }
});
export const { popData } = popupDataSlice.actions;
export default popupDataSlice.reducer;
