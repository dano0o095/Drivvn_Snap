import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import cards from './cards/reducer'


const rootReducer = combineReducers({
  cards
})


const store = createStore(rootReducer, composeWithDevTools())

const persistor = persistStore(store)

export { store }
