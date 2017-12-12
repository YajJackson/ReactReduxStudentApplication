import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index_reducer'
import promise from 'redux-promise'

const enhancer = applyMiddleware(promise)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
};