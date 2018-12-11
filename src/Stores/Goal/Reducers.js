/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { GoalTypes } from './Actions'

// show and hide loading list goal when request
const showLoadingItems = state => state.set('isLoadingItems', true)
const hideLoadingItems = state => state.set('isLoadingItems', false)
// show and hide goal detail when request
const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)

// Set list goal when get items success
const setItems = (state, { items }) =>
  state.set('items', fromJS(items)).set('isLoadingItems', false)
// Clear list goal when component unmount
const clearItems = state => state.set('items', fromJS([]))
// Set goal detail when get item success
const setItem = (state, { item }) =>
  state.set('item', fromJS(item)).set('isLoadingItem', false)

// Clear item when get component unmount
const clearItem = state => state.set('item', fromJS({}))

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  // Reducer when get list goals action
  [GoalTypes.GET_ITEMS_REQUEST]: showLoadingItems,
  [GoalTypes.GET_ITEMS_SUCCESS]: setItems,
  [GoalTypes.GET_ITEMS_FAILURE]: hideLoadingItems,
  [GoalTypes.CLEAR_ITEMS]: clearItems,
  // Reducer when get goal detail action
  [GoalTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [GoalTypes.GET_ITEM_SUCCESS]: setItem,
  [GoalTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [GoalTypes.CLEAR_ITEM]: clearItem,
})

export default reducer
