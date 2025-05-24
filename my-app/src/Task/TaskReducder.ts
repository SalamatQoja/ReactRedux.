import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TaskSlice";

const store3 = configureStore({
    reducer: {
        task: TaskReducer,
    },
});

export default store3

export type RootState = ReturnType<typeof store3.getState>;
export type AppDispatch = typeof store3.dispatch;


