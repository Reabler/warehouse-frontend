import { combineReducers, createStore } from 'redux'

// Reducers
import { productsReducer } from './productsReducer'
import { articlesReducer } from './articlesReducer'
import { vendorsReducer } from './vendorsReducer'
import { campaignsReducer } from './campaignsReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  articles: articlesReducer,
  vendors: vendorsReducer,
  campaigns: campaignsReducer
})

export default rootReducer