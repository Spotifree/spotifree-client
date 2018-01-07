import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import userReducers from './reducers/users'
import musicReducers from './reducers/musics'

const appReducers = combineReducers({
  userReducers,
  musicReducers
})

const middleware = applyMiddleware(thunk)

export default store = createStore(appReducers, middleware)