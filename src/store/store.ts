import { createStore, combineReducers } from 'redux'

import usersReducer from './user/reducer'

const rootReducer = combineReducers({
  users: usersReducer
})

export const storeRedux = createStore(rootReducer)
