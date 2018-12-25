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

// Show and hide loading histories when request
const showLoadingHistories = state => state.set('isLoadingHistories', true)
const hideLoadingHistories = state => state.set('isLoadingHistories', false)
// Set hisotires items when load succes
const setHistories = (state, { items }) =>
  state.merge(
    fromJS({
      histories: items,
      isLoadingHistories: false,
    })
  )
// Clear histories
const clearHistories = state => state.set('histories', fromJS([]))

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [TaticTypes.GET_ITEM_REQUEST]: showLoadingItem,
  [TaticTypes.GET_ITEM_FAILURE]: hideLoadingItem,
  [TaticTypes.GET_ITEM_SUCCESS]: setItem,
  [TaticTypes.CLEAR_ITEM]: clearItem,
  // History action
  [TaticTypes.GET_HISTORIES_REQUEST]: showLoadingHistories,
  [TaticTypes.GET_HISTORIES_SUCCESS]: setHistories,
  [TaticTypes.GET_HISTORIES_FAILURE]: hideLoadingHistories,
  [TaticTypes.CLEAR_HISTORIES]: clearHistories,
})

export default reducer
