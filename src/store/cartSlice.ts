import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CartProduct} from "../../types/product";
import {RootState} from "@/store/store";

type Totals = {
    subtotal: number;
    total: number;
};

type CartState = {
    products: CartProduct[];
    totals: Totals;
};

const initialState: CartState = {
    products: [],
    totals: {
        subtotal: 0,
        total: 0,
    },
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state, action: PayloadAction<CartProduct>) => {
            const foundIndex = state.products.findIndex(
                (product) => product.id === action.payload.id
            )

            if (foundIndex === -1) {
                state.products.push(action.payload);
                state.totals.subtotal += action.payload.price * action.payload.quantity;
                state.totals.total += action.payload.price * action.payload.quantity;
            } else {
                state.totals.subtotal += action.payload.price * action.payload.quantity;
                state.totals.total += action.payload.price * action.payload.quantity;
                state.products[foundIndex].quantity += action.payload.quantity;
            }
        },

        remove: (state, action: PayloadAction<CartProduct>) => {
            if (state.products.length === 1) {
                reset()
            }

            const foundIndex = state.products.findIndex(
                (product) => product.id === action.payload.id
            );

            if (foundIndex !== -1) {
                const price = state.products[foundIndex].price;
                const quantity = state.products[foundIndex].quantity;
                state.products.splice(foundIndex, 1);
                const actualPrice = price * quantity
                state.totals.total -= actualPrice;
                state.totals.subtotal -= actualPrice;
            }
        },

        decrement: (state, action: PayloadAction<CartProduct>) => {
            const foundIndex = state.products.findIndex(
                (product) => product.id === action.payload.id
            );

            if (foundIndex !== -1) {
                const price = state.products[foundIndex].price;
                state.products[foundIndex].quantity -= 1;
                state.totals.total -= price;
                state.totals.subtotal -= price;
            }
        },
    },
});

export const {increment, decrement, remove, reset} = cartSlice.actions;

export const selectProducts = (state: RootState) => state.products;
export const selectTotals = (state: RootState) => state.totals;

export default cartSlice.reducer;
