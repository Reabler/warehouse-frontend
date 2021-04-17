const initialState = {
  products: []
}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return state
    case 'GET_PRODUCTS_SUCCESS':
      return action.payload.data
    case 'GET_PRODUCTS_FAIL':
      return state
    default:
      return state
  }
}

export function getProducts() {
  return {
    type: 'GET_PRODUCTS',
    payload: {
      request:{
        url:'/products'
      }
    }
  }
}