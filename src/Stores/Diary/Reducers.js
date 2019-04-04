/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { DiaryTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

// Show and hide loading when get list diary
const showLoadingItems = state => state.set('isLoadingItems', true)
const hideLoadingItems = state => state.set('isLoadingItems', false)
// Show and hide loading when get diary detail
const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)
// Set items when get list diary success
const setItems = (state, { items, totalPages }) =>
  state.merge(
    fromJS({
      items,
      totalPages,
      isLoadingItems: false,
    })
  )
// Clear list diary when component unmount
const clearItems = state =>
  state.merge(
    fromJS({
      items: [],
      totalPages: 0,
    })
  )
// Set and clear diary detail when page mount and unmount
const setItem = (state, { item }) =>
  state.merge(
    fromJS({
      isLoadingItem: false,
      item,
    })
  )
const clearItem = state => state.set('item', fromJS([]))

const setItemCreate = (state, { item }) => {
  const items = state.get('items')
  const newItems = items.unshift(fromJS(item))
  return state.set('items', newItems)
}

const setItemEdit = (state, { item }) => state.set('item', fromJS(item))

const reducer = createReducer(INITIAL_STATE, {
  [DiaryTypes.GET_ITEMS_REQUEST]: showLoadingItems,
  [DiaryTypes.GET_ITEMS_SUCCESS]: setItems,
  [DiaryTypes.GET_ITEMS_FAILURE]: hideLoadingItems,
  [DiaryTypes.CLEAR_ITEMS]: clearItems,
  // Set item when create success
  [DiaryTypes.CREATE_ITEM_SUCCESS]: setItemCreate,
  // Set item when edit success
  [DiaryTypes.EDIT_ITEM_SUCCESS]: setItemEdit,
  // Get item detail  actions
  [DiaryTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [DiaryTypes.GET_ITEM_SUCCESS]: setItem,
  [DiaryTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [DiaryTypes.CLEAR_ITEM]: clearItem,
})
reducerRegistry.register(MODULE_NAME, reducer)
