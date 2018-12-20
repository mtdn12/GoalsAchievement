/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TaticTypes } from './Actions'

// Show and hide loading when request Strategy detail
const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)

// Set item and hide loading when get tatic detail success
const setItem = (state, { item }) =>
  state.set('item', fromJS(item)).set('isLoadingItem', false)
// Clear tatic item when component unmopunt
const clearItem = state => state.set('item', fromJS({}))

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [TaticTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [TaticTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [TaticTypes.GET_ITEM_SUCCESS]: setItem,
  [TaticTypes.CLEAR_ITEM]: clearItem,
})

export default reducer
