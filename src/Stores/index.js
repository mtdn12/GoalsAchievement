import { combineReducers } from 'redux' //
import { connectRouter } from 'connected-react-router'

import { reducer as GlobalReducer } from './Global/Reducers'
import { reducer as NotificationReducer } from './Notification/Reducers'
import { firebaseReducer } from 'react-redux-firebase'
import modalReducer from './Modal/Reducers'
import goalReducer from './Goal/Reducers'
import objectiveReducer from './Objective/Reducers'

function createRootReducer(history) {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    router: connectRouter(history),
    global: GlobalReducer,
    notification: NotificationReducer,
    // Start here
    firebase: firebaseReducer,
    modal: modalReducer,
    goal: goalReducer,
    objective: objectiveReducer,
  })
  return rootReducer
}

export default createRootReducer
