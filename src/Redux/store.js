import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/CartSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

