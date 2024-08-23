import { configureStore } from "@reduxjs/toolkit";
import CheckReducer from "./checkSlice";
const appStore = configureStore({
    reducer: {
        Check:CheckReducer,
    }
});
export default appStore;