
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {            
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            console.log("cartSlice , removeFromCart val ==== "+state.indexId);
            //state.items.pop();
            state.items.slice(state.indexId, 1);
        },
        emptyTheCart: (state, action) => {
            state.items.length = 0;
        },
    },
});

export const { addToCart, removeFromCart, emptyTheCart } = cartSlice.actions;

export default cartSlice.reducer;