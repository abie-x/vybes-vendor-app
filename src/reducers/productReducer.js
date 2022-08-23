import {ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE} from '../constants/productConstants'

export const createProductReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_PRODUCT_REQUEST:
        return { loading: true }
      case ADD_PRODUCT_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case ADD_PRODUCT_FAILURE:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }