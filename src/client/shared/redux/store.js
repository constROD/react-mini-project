import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import userReducer from './user/reducer'

const reducers = combineReducers({
  userReducer
})

const middleware = process.env.ZONE === 'production' ? applyMiddleware(promise, thunk) : applyMiddleware(promise, thunk, logger)

let reduxDevTools = initialState => {
  return initialState
}

if (process.env.ZONE === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export default createStore(reducers, compose(middleware, reduxDevTools))