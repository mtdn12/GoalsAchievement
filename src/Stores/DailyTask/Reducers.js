/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { DailyTaskTypes } from './Actions'

// Show and hide loading when request Strategy detail
const showLoadingItems = state => state.set('isLoadingItems', true)
const hideLoadingItems = state => state.set('isLoadingItems', false)

// Set item and hide loading when get tatic detail success
const setItems = (state, { items }) =>
  state.set('items', fromJS(items)).set('isLoadingItems', false)
// Clear tatic item when component unmopunt
const clearItems = state => state.set('items', fromJS({}))

// Change task by new task after check or uncheck
const changeItem = (state, { item }) => {
  const items = state.get('items')
  const newItems = items.map(item => {
    if (item.get('_id') === item._id) {
      return fromJS(item)
    }
    return item
  })
  return state.set('items', newItems)
}

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [DailyTaskTypes.GET_ITEMS_REQUEST]: showLoadingItems,
  [DailyTaskTypes.GET_ITEMS_FAILURE]: hideLoadingItems,
  [DailyTaskTypes.GET_ITEMS_SUCCESS]: setItems,
  [DailyTaskTypes.CLEAR_ITEMS]: clearItems,
  // Set item
  [DailyTaskTypes.CHECK_ITEM_SUCCESS]: changeItem,
  [DailyTaskTypes.UNCHECK_ITEM_SUCCESS]: changeItem,
})

export default reducer
