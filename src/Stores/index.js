import { combineReducers } from 'redux' //
import { connectRouter } from 'connected-react-router'

import configureStore from './CreateStore'

import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as AuthenticationReducer } from './Authentication/Reducers'
import { reducer as GlobalReducer } from './Global/Reducers'
import { reducer as NotificationReducer } from './Notification/Reducers'

function createRootReducer(history) {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    router: connectRouter(history),
    auth: AuthenticationReducer,
    global: GlobalReducer,
    notification: NotificationReducer,
    // Start here
    example: ExampleReducer,
  })
  return configureStore(rootReducer, history)
}

export default createRootReducer
