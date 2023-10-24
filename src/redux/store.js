import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./reducers";
import {orderReducer } from "./orderReducer"

const store = configureStore({
    reducer: {
        cart: cartReducer
       
    },
});

export default store;