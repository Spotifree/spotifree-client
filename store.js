import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import userReducers from './reducers/users'

const appReducers = combineReducers({
  userReducers
})

const middleware = applyMiddleware(thunk)

export default store = createStore(appReducers, middleware)