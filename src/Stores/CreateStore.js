import { applyMiddleware, compose, createStore } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router/immutable'
import { persistReducer, persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import authSaga from 'src/Stores/Authentication/Sagas'
import createRootReducer from './index'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'src/Services/Firebase'
/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  transforms: [
    /**
     * This is necessary to support immutable reducers.
     * @see https://github.com/rt2zz/redux-persist-transform-immutable
     */
    immutableTransform(),
  ],
  key: 'root',
  storage: storage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: ['router', 'notification'],
}
const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
}

export default history => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(routerMiddleware(history))
  enhancers.push(applyMiddleware(...middleware))
  enhancers.push(reactReduxFirebase(firebase, rrfConfig))

  let composeEnhancers = compose

  if (
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  // Redux persist
  const rootReducer = createRootReducer(history)
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, composeEnhancers(...enhancers))

  // Kick off the root saga
  store.injectedSagas = []
  store.runSaga = sagaMiddleware.run
  store.injectedSagas.push('auth')
  store.runSaga(authSaga, getFirebase)

  const persistor = persistStore(store)

  return { store, persistor }
}
