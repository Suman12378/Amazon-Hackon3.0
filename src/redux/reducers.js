import { createReducer } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

export const cartReducer = createReducer(
     {
     cartItems: [],
     orderItems: [],
     container: [],
     order_total: 0,
     subTotal: 0,
     shipping: 0,
     tax: 0,
     total: 0,
     reward: 0,
  },
    {
  addToCart: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartItems.find((i) => i.id === item.id);

    if(isItemExist){
       state.cartItems.forEach((i) => {
        if(i.id === item.id) i.quantity +=1;
       });
    }
    else{
        state.cartItems.push(item);
    }
  },

  decrement: (state, action) => {
    const item = state.cartItems.find((i) => i.id === action.payload);
    if (item.quantity > 1) {
      state.cartItems.forEach((i) => {
        if (i.id === item.id) i.quantity -= 1;
      });
    }
  },
  deleteFromCart: (state, action) => {
    state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
  },
  convert: (state, action) => {
    state.cartItems.forEach((i) => {
      const isItemExist = state.orderItems.find((j) => j.id === i.id);
       if(!isItemExist) state.orderItems.push(i);
        state.cartItems = state.cartItems.filter((j) => j.id !== i.id);
     });
  },
  zero: (state) =>{
     state.shipping = 0;
     state.total = 0;
     state.tax=0;
     state.subTotal=0;
  },
  addPoints: (state, action) =>{
    const item = action.payload;
    const isItemExist = state.container.find((i) => i === item);
    if(isItemExist){
      toast.success("You have already been rewarded!")
    }
    else{
      state.container.push(item);
      state.reward = state.reward+5;
      toast.success("you are rewarded!");
    }
  },
  calculatePrice: (state) => {
    let sum = 0;
    state.cartItems.forEach((i) => (sum += i.price * i.quantity));
    state.subTotal = sum;
    state.shipping = state.subTotal > 1000 ? 0 : 200;
    state.tax = +(state.subTotal * 0.18).toFixed();
    state.total = state.subTotal + state.tax + state.shipping;
  },
   }
 );