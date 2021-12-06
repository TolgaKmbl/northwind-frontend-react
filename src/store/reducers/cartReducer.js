import { ADD_TO_CART } from "../actions/cartActions";
import { REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            let product = state.cartItems.find(c => c.product.id === action.payload.id)
            if (product) {
                product.quantity++
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems:[...state.cartItems, {quantity:1, product:action.payload}]
                }
            }
        case REMOVE_FROM_CART: return {           
            ...state,
            cartItems:state.cartItems.filter(c => c.product.id!==action.payload.id)          
        }
        default : return state
    }
}

export default cartReducer

