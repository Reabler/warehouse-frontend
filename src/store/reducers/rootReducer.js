import { combineReducers, createStore } from 'redux'

// Reducers
import { productsReducer } from './productsReducer'
import { articlesReducer } from './articlesReducer'
import { vendorsReducer } from './vendorsReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  articles: articlesReducer,
  vendors: vendorsReducer
})

export default rootReducer