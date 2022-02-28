import { createSelector } from "@reduxjs/toolkit";
const cartItemSelector =(state)=>state.cart.cartItem;

//count number of product in cart
export const cartItemCountSelector=createSelector(cartItemSelector,
    (cartItem)=> cartItem.reduce((count,item)=>count+item.quantity,0))
//tinh tong tien toan bo
export const cartTotalSelector=createSelector(cartItemSelector,
    cartItem=> cartItem.reduce((total,item)=>total+item.productItem[0].price*item.quantity,0))
//lay danh sach trong cart
export const cartItemList=createSelector(cartItemSelector,
    cartItem=> cartItem)



    
    
