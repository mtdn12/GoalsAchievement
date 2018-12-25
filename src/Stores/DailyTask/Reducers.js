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
// Chow and hide loading when check or uncheck task
const showLoadingCheck = (state, { id }) =>
  state.setIn(['isLoadingCheck', `${id}`], true)
const hideLoadingCheck = (state, { id }) =>
  state.setIn(['isLoadingCheck', `${id}`], false)
// Set item and hide loading when get tatic detail success
const setItems = (state, { items }) =>
  state.set('items', fromJS(items)).set('isLoadingItems', false)
// Clear tatic item when component unmopunt
const clearItems = state => state.set('items', fromJS([]))

// Change task by new task after check or uncheck
const changeItem = (state, { item }) => {
  const items = state.get('items')
  const newItems = items.map(i => {
    if (i.get('_id') === item._id) {
      return fromJS(item)
    }
    return i
  })
  return state
    .set('items', newItems)
    .setIn(['isLoadingCheck', `${item._id}`], false)
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
  [DailyTaskTypes.CHECK_ITEM_REQUEST]: showLoadingCheck,
  [DailyTaskTypes.CHECK_ITEM_FAILURE]: hideLoadingCheck,
  [DailyTaskTypes.CHECK_ITEM_SUCCESS]: changeItem,
  [DailyTaskTypes.UNCHECK_ITEM_SUCCESS]: changeItem,
  [DailyTaskTypes.UNCHECK_ITEM_REQUEST]: showLoadingCheck,
  [DailyTaskTypes.UNCHECK_ITEM_FAILURE]: hideLoadingCheck,
})

export default reducer
