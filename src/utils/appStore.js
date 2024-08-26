import { configureStore } from "@reduxjs/toolkit";
import CheckReducer from "./checkSlice";
import popupReducer from "./popupDataSlice";
const appStore = configureStore({
    reducer: {
        Check: CheckReducer,
        popupData:popupReducer
    }
});
export default appStore;