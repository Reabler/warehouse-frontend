const initialState = {
  campaigns: []
}

export function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CAMPAIGNS':
      return state
    case 'GET_CAMPAIGNS_SUCCESS':
      return action.payload.data
    case 'GET_CAMPAIGNS_FAIL':
      return state
    default:
      return state
  }
}

export function getCampaigns() {
  return {
    type: 'GET_CAMPAIGNS',
    payload: {
      request:{
        url:'/campaigns'
      }
    }
  }
}