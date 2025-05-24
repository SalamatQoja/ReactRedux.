import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ProductSlice";


const store2 = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store2;

export type RootState = ReturnType<typeof store2.getState>;
export type AppDispatch = typeof store2.dispatch;
