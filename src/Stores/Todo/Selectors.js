import { MODULE_NAME } from './InitialState'
// Get list todos
export const getTodos = state => state[MODULE_NAME].get('todos')
// Get lodaing list todo
export const getLoadingTodos = state => state[MODULE_NAME].get('isLoadingTodos')
// Get list daily Task
export const getDailyTodos = state => state[MODULE_NAME].get('dailyTodos')
// Get loading daily todos
export const getLoadingDailyTodos = state =>
  state[MODULE_NAME].get('isLoadingDaily')
// Get list history
export const getHistories = state => state[MODULE_NAME].get('histories')
// Get loading history
export const getLoadingHistories = state =>
  state[MODULE_NAME].get('isLoadingHistory')
// Get loading action
export const getLoadingAction = state =>
  state[MODULE_NAME].get('isLoadingAction')
// Get Loading Check
export const getLoadingCheck = state => state[MODULE_NAME].get('isLoadingCheck')
// Get Histories filter
export const getHistoryFilter = state => state[MODULE_NAME].get('historyFilter')
// Get history pages
export const getHistoryPages = state => state[MODULE_NAME].get('historyPages')
