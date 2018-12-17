/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ObjectiveTypes } from './Actions'

// Show and hide loading when request objective detail
const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)

// Set item and hide loading when get objective detail success
const setItem = (state, { item }) =>
  state.set('item', fromJS(item)).set('isLoadingItem', false)
// Clear objective item when component unmopunt
const clearItem = state => state.set('item', fromJS({}))

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [ObjectiveTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [ObjectiveTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [ObjectiveTypes.GET_ITEM_SUCCESS]: setItem,
  [ObjectiveTypes.CLEAR_ITEM]: clearItem,
})

export default reducer
