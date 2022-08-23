import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalQuanity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItem(state, action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuanity++

            if(!existingItem){

                /*  ==== note: if you use just redux you should not mute state array instead of clone the state array, 
                but if you use redux toolkit that will not a problem becase redux toolkit clone the array behind the scene*/
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quanity: 1,
                    totalPrice: newItem.price
                })
            }

            else{
                existingItem.quanity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>(
                total + Number(item.price) * Number(item.quanity)
            ))
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice