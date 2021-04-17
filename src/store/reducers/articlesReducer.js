const initialState = {
  articles: []
}

export function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ARTICLES':
      return state
    case 'GET_ARTICLES_SUCCESS':
      return action.payload.data
    case 'GET_ARTICLES_FAIL':
      return state
    default:
      return state
  }
}

export function getArticles() {
  return {
    type: 'GET_ARTICLES',
    payload: {
      request:{
        url:'/articles'
      }
    }
  }
}