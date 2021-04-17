import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers/rootReducer';

const client = axios.create({
  baseURL:'http://localhost:4000',
  responseType: 'json'
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
  )
)

export { store }