/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

const setUser = (state, { user }) => state.set('auth', fromJS(user))

const clearUser = state => INITIAL_STATE

const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.SET_USER]: setUser,
  [AuthTypes.CLEAR_USER]: clearUser,
  // LOGIN SUCCESS
  [AuthTypes.LOGIN_SUCCESS]: setUser,
  [AuthTypes.SOCIAL_LOGIN_SUCCESS]: setUser,
})
export default reducer
