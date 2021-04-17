const initialState = {
  vendors: []
}

export function vendorsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_VENDORS':
      return state
    case 'GET_VENDORS_SUCCESS':
      return action.payload.data
    case 'GET_VENDORS_FAIL':
      return state
    default:
      return state
  }
}

export function getVendors() {
  return {
    type: 'GET_VENDORS',
    payload: {
      request:{
        url:'/vendors'
      }
    }
  }
}