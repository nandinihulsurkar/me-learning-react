
import { configureStore } from "@reduxjs/toolkit";
import cartReduler from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart: cartReduler,
     }
});

export default appStore;