import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
const fetchUserById = createAsyncThunk(
    'user/register',
    async (payload) => {
      //call api to register

      //save data to local storage
    }
  )
const cartSlice=createSlice({

    name:'cart',
    initialState:{
        showMiniCart:false,
        cartItem:[],
    },
    reducers:{
        showMiniCart(state){
            state.showMiniCart=true;
        },
        hideMiniCart(state){
            state.showMiniCart=false;
        },
        addToCart(state,action){
            const newItem=action.payload;
            const index=state.cartItem.findIndex(x=>x.id===newItem.id);
            if(index>=0){
                state.cartItem[index].quantity+=newItem.quantity;
            }else{
                state.cartItem.push(newItem);
            }
        },
        setQuantity(state,action){
            const {id,quantity} = action.payload;
            //check if product id available in cart
            const index=state.cartItem.findIndex(x=>x.id===id)
            if(index>=0){
                state.cartItem[index].quantity=quantity;
            }

        },
        removeFormCart(state,action){
            const idNeedToRemove=action.payload;
            state.cartItem= state.cartItem.filter(x => x.id!==idNeedToRemove)
        },
        
    }

})
const {actions,reducer} =cartSlice;
export const {showListItem,showMiniCart,hideMiniCart,addToCart,setQuantity,removeFormCart}=actions;
export default reducer;