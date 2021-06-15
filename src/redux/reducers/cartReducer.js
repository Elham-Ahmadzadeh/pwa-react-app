import { ADD_TO_CART } from '../actions/actionTypes'
const initialState = {
  cartArr: []
}
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartArr: [...state.cartArr, action.product] }
    default:
      return state
  }
}
