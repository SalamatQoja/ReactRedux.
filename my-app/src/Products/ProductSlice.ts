import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./Product";
import type  { RootState } from "./ProductIndex";

interface CartProduct extends Product {
    quantity: number;

};

const initialState = {
    items: [] as CartProduct[],
    total: 0,
    
};

export const selectTotalPrice = (state: RootState) => {
    return state.cart.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        decrementCart: (state, action: PayloadAction<Product>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if(index !== -1) {
                if(state.items[index].quantity > 1) {
                    state.items[index].quantity -=1;
                } else {
                    state.items.splice(index, 1);
                }
            }
        },

        removeCart: (state, action: PayloadAction<Product>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }

    },
});

export const { addCart, removeCart, decrementCart} = CartSlice.actions;
export default CartSlice.reducer;