import { configureStore } from "@reduxjs/toolkit";
import ChangeReducer from "./ChangeGas";


const stores = configureStore({
    reducer: {
        change: ChangeReducer,
    },
});

export default stores;

export type RootState = ReturnType<typeof stores.getState>
export type AppDispatch = typeof stores.dispatch;