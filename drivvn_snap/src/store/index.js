import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import cards from './cards/reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [] // array of strings - the names from the rootReducer
}

const rootReducer = combineReducers({
  cards
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools())

const persistor = persistStore(store)

export { store, persistor }
