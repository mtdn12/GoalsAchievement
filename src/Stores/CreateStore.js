import { applyMiddleware, compose, createStore } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router/immutable'
import { persistReducer, persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import { connectRouter } from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import { combine, initialState } from './Reducers/index'

// Import Saga and register saga to register static sagas
import sagaRegistry from './Sagas/SagaRegistry'
import authSaga from './Authentication/Sagas'
// Import reducer to register static reducer
import reducerRegistry from './Reducers/ReducerRegistry'
import loadingReducer from './Loading/Reducers'
import authReducer from './Authentication/Reducers'
// Import module name
import { MODULE_NAME as authName } from './Authentication/InitialState'
import { MODULE_NAME as loadingName } from './Loading/InitialState'

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

export default history => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(routerMiddleware(history))
  enhancers.push(applyMiddleware(...middleware))

  let composeEnhancers = compose

  if (
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  // Redux persist
  const rootReducer = combine(reducerRegistry.getReducers())
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  const persistor = persistStore(store)
  // Persitor
  store.persistor = persistor

  // Kick off the root saga
  // Run sagas
  // Register saga change listener
  sagaRegistry.setChangeListener(saga => {
    sagaMiddleware.run(saga)
  })
  sagaRegistry.register(authName, authSaga)
  // Register reducer change lítener
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(persistReducer(persistConfig, combine(reducers)))
  })
  reducerRegistry.register('router', connectRouter(history))
  reducerRegistry.register(loadingName, loadingReducer)
  reducerRegistry.register(authName, authReducer)
  return store
}
