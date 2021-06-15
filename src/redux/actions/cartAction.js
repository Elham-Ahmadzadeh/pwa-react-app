import { ADD_TO_CART } from './actionTypes'

export const addToCart = (product) => (dispatch, getState) => {
  getState().product
  dispatch({
    type: ADD_TO_CART,
    payload: product
  })
  dispatch({ type: ADD_TO_CART, payload: { product } })
}
