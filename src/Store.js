import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./CartSlice";

const Store = configureStore({
    reducer:{
        carts : cartsReducer
    }
})

export default Store;