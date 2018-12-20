/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ActionTypes } from './Actions'

// Show and hide loading when request Strategy detail
const showLoadingItems = state => state.set('isLoadingItems', true)
const hideLoadingItems = state => state.set('isLoadingItems', false)

// Set item and hide loading when get tatic detail success
const setItems = (state, { items }) =>
  state.set('items', fromJS(items)).set('isLoadingItems', false)
// Clear tatic item when component unmopunt
const clearItems = state => state.set('items', fromJS({}))

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [ActionTypes.GET_ITEMS_REQUEST]: showLoadingItems,
  [ActionTypes.GET_ITEMS_FAILURE]: hideLoadingItems,
  [ActionTypes.GET_ITEMS_SUCCESS]: setItems,
  [ActionTypes.CLEAR_ITEMS]: clearItems,
})

export default reducer
