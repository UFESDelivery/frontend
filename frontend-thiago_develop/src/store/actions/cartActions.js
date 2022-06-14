import { ADD_TO_CART } from "./cart-type-actions"

export const addToCart = (id)=>(
  console.log(
  { type:ADD_TO_CART,
    id
  })
)