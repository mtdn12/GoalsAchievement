import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = fromJS({
  items: [],
  isLoadingItems: false,
  filter: {
    isRecall: false,
  },
  item: {},
  isLoadingItem: false,
  isLoadingCheck: {},
})
