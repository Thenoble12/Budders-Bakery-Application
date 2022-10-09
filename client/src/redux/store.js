import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import appReducer from './appReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({reducer: appReducer}, composeEnhancers(applyMiddleware()))

const persistor = persistStore(store);

export { store, persistor }