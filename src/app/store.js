import cartReducer from '../components/pages/Cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit'


const rootReducer ={
    cart:cartReducer,
};
const store = configureStore({
    reducer:rootReducer
  })
export default store;