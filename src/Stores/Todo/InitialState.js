import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = fromJS({
  todos: [],
  isLoadingTodos: false,
  dailyTodos: [],
  isLoadingDaily: false,
  histories: [],
  isLoadingHistory: false,
  isLoadingAction: false,
  isLoadingCheck: {},
  historyFilter: {
    page: 1,
    limit: 10,
  },
  historyPages: 0,
})

export const MODULE_NAME = 'todo'
