import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import cards from './cards/reducer'


const rootReducer = combineReducers({
  cards
})


const store = createStore(rootReducer, composeWithDevTools())

export { store }
