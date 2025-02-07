import * as React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    totalPrice : 0,
    totalItemsCount : 0
}
const CartSlice = createSlice({
    name : "carts",
    initialState,
    reducers : {
        addToCart(state,action){
            console.log(action);
            // const plant = action.payload.product.plants.find(plant => plant?.plantId === action.payload?.plant?.plantId);
            const existingPlant = state.cartItems.find((cart) => cart.productId === action.payload.product.productId && cart.plantId === action.payload?.plant?.plantId);
            if(existingPlant){
                existingPlant.disabled = true;
            } else {
                state.cartItems.push({...action.payload.product, ...action.payload?.plant, disabled : true, quantity:1});
            }
            
            state.totalItemsCount = state.cartItems.reduce((total , item) => total + item.quantity ,0);
            state.totalPrice = state.cartItems.reduce((total , item) => total + item.quantity * item.price ,0);
        },
        removeFromCart(state, action){
            const existingPlantIndex = state.cartItems.findIndex((cart) => cart.productId === action.payload.productId && cart.plantId === action.payload?.plantId);
            if(existingPlantIndex>-1){
                state.cartItems.splice(existingPlantIndex, 1);
            }
            state.totalItemsCount = state.cartItems.reduce((total , item) => total + item.quantity ,0);
            state.totalPrice = state.cartItems.reduce((total , item) => total + item.quantity * item.price ,0);
        },
        increaseQuantity(state, action){
            console.log(action);
            const existingPlant = state.cartItems.find((cart) => cart.productId === action.payload.productId && cart.plantId === action.payload?.plantId);
            if(existingPlant){
                existingPlant.quantity++;
            }
            state.totalItemsCount = state.cartItems.reduce((total , item) => total + item.quantity ,0);
            state.totalPrice = state.cartItems.reduce((total , item) => total + item.quantity * item.price ,0);
        },
        decreaseQunatity(state, action){
            const existingPlant = state.cartItems.find((cart) => cart.productId === action.payload.productId && cart.plantId === action.payload?.plantId);
            if(existingPlant && existingPlant.quantity>0){
                existingPlant.quantity--;
            }
            state.totalItemsCount = state.cartItems.reduce((total , item) => total + item.quantity ,0);
            state.totalPrice = state.cartItems.reduce((total , item) => total + item.quantity * item.price ,0);
        },
        // totalItems(state, action){
        //     state.totalItemsCount = state.cartItems.length;
        // }
    }})

export const {
    addToCart,
    increaseQuantity,
    decreaseQunatity,
    removeFromCart
} = CartSlice.actions;

export default CartSlice.reducer;