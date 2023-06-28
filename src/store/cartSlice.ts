import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartProduct} from "../../types/product";
import {RootState} from "@/store/store";

type Totals = {
    subtotal: number
    total: number
}

type CartState = {
    products: CartProduct[]
    totals: Totals
};

const initialState: CartState = {
    products: [
        {
            id: "1",
            name: "Product 1",
            price: 100,
            quantity: 1,
            image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        }
    ],
    totals: {
        subtotal: 100,
        total: 100,
    }
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state, action: PayloadAction<CartProduct>) => {
            const foundIndex = state.products.findIndex(product => product.id === action.payload.id);
            const total = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);

            if (foundIndex === -1) {
                state.products.push(action.payload);
                state.totals.subtotal = total + action.payload.price
                state.totals.total = total + action.payload.price
            } else {
                state.totals.subtotal = total + action.payload.price
                state.totals.total = total + action.payload.price
                state.products[foundIndex].quantity += action.payload.quantity;
            }
        },
        remove: (state, action: PayloadAction<CartProduct>) => {
            const foundIndex = state.products.findIndex(product => product.id === action.payload.id);

            if (foundIndex !== -1) {
                const price = state.products[foundIndex].price;
                state.products.splice(foundIndex, 1);
                state.totals.total -= price * action.payload.quantity;
                state.totals.subtotal -= price * action.payload.quantity;
            }
        },
        decrement: (state, action: PayloadAction<CartProduct>) => {
            const foundIndex = state.products.findIndex(product => product.id === action.payload.id);

            if (foundIndex !== -1) {
                const price = state.products[foundIndex].price;
                state.products[foundIndex].quantity -= 1
                state.totals.total -= price;
                state.totals.subtotal -= price;
            }
        },
    },
});

export const {
    increment,
    decrement,
    remove,
    reset,
} = cartSlice.actions;

export const selectProducts = (state: RootState) => state.products;
export const selectTotals = (state: RootState) => state.totals;

export default cartSlice.reducer;