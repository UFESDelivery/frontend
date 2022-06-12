import { ADD_TO_CART } from "./cart-type-actions"

export const addToCart = (id)=>(
  { type:ADD_TO_CART,
    id
  }
)