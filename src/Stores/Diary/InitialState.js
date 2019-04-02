import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = fromJS({
  items: [],
  isLoadingItems: false,
  filter: {
    page: 1,
    limit: 10,
  },
  totalPages: 0,
  item: {},
  isLoadingItem: false,
})

export const MODULE_NAME = 'diary'
