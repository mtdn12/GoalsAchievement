/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { WordTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

// Show and hide loading when request word list
const showLoadingItems = state => state.set('isLoadingItems', true)
const hideLoadingItems = state => state.set('isLoadingItems', false)
// Show and loading check when check word
const showLoadingCheck = (state, { id }) =>
  state.setIn(['isLoadingCheck', id], true)
const hideLoadingCheck = (state, { id }) =>
  state.setIn(['isLoadingCheck', id], false)
// Set item and hide loading when get tatic detail success
const setItems = (state, { items }) =>
  state.set('items', fromJS(items)).set('isLoadingItems', false)
// Clear words when component unmopunt
const clearItems = state => state.set('items', fromJS([]))
// Change filter of page
const setFilter = (state, { name, value }) =>
  state.setIn(['filter', name], value)

// set item when get item detail
const setItem = (state, { item }) =>
  state.set('item', fromJS(item)).set('isLoadingItem', false)
// Clear item
const clearItem = state => state.set('item', fromJS({}))
// Show and hide loading when get book detail
const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [WordTypes.GET_ITEMS_REQUEST]: showLoadingItems,
  [WordTypes.GET_ITEMS_FAILURE]: hideLoadingItems,
  [WordTypes.GET_ITEMS_SUCCESS]: setItems,
  [WordTypes.CLEAR_ITEMS]: clearItems,
  // Get item detail request
  [WordTypes.SET_FILTER]: setFilter,
  // Check word recall
  [WordTypes.CHECK_RECALL_REQUEST]: showLoadingCheck,
  [WordTypes.CHECK_RECALL_SUCCESS]: hideLoadingCheck,
  [WordTypes.CHECK_RECALL_FAILURE]: hideLoadingCheck,
  // Get Word detail
  [WordTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [WordTypes.GET_ITEM_SUCCESS]: setItem,
  [WordTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [WordTypes.CLEAR_ITEM]: clearItem,
})

reducerRegistry.register(MODULE_NAME, reducer)
