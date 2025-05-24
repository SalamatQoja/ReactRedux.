import {  createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Change =  {
    title: string;
}

type ChangeImportant = {
    list: Change [];
}

const initialState: ChangeImportant = {
    list: [],

} 

const ChangeGas = createSlice ({
    name: "change",
    initialState,
    reducers: {
        changeName(state, action: PayloadAction<string> ) {
            state.list.push({
                title: action.payload,
            });
        },
    }

});

export const {changeName} = ChangeGas.actions;
export default ChangeGas.reducer;



