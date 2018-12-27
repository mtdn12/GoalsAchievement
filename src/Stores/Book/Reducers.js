/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { BookTypes } from './Actions'

// Show and hide loading when request book list
const showLoadingItems = state => state.set('isLoadingItems', true)
const hideLoadingItems = state => state.set('isLoadingItems', false)
// Show and hide loading when get book detail
const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)
// Set item and hide loading when get tatic detail success
const setItems = (state, { items }) =>
  state.set('items', fromJS(items)).set('isLoadingItems', false)
// Clear tatic item when component unmopunt
const clearItems = state => state.set('items', fromJS([]))
// set item when get item detail
const setItem = (state, { item }) =>
  state.set('item', fromJS(item)).set('isLoadingItem', false)
// Clear item
const clearItem = state => state.set('item', fromJS({}))
// Change filter of page
const setFilter = (state, { name, value }) =>
  state.setIn(['filter', name], value)

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [BookTypes.GET_ITEMS_REQUEST]: showLoadingItems,
  [BookTypes.GET_ITEMS_FAILURE]: hideLoadingItems,
  [BookTypes.GET_ITEMS_SUCCESS]: setItems,
  [BookTypes.CLEAR_ITEMS]: clearItems,
  // Get item detail request
  [BookTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [BookTypes.GET_ITEM_SUCCESS]: setItem,
  [BookTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [BookTypes.CLEAR_ITEM]: clearItem,
  // Change filter
  [BookTypes.SET_FILTER]: setFilter,
})

export default reducer
