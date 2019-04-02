/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'
import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TodoTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'
// Show and hide loading when request todo lít
const showLoadingTodos = state => state.set('isLoadingTodos', true)
const hideLoadingTodos = state => state.set('isLoadingTodos', false)
// Show and hide loading when request daily todo list
const showLoadingDaily = state => state.set('isLoadingDaily', true)
const hideLoadingDaily = state => state.set('isLoadingDaily', false)
// Show and hide loading when request  todo's history list
const showLoadingHistory = state => state.set('isLoadingHistory', true)
const hideLoadingHistory = state => state.set('isLoadingHistory', false)
// Show and hide loading action when create or edit todo
const showLoadingAction = state => state.set('isLoadingAction', true)
const hideLoadingAction = state => state.set('isLoadingAction', false)
// Set item and hide loading when get todo list
const setTodos = (state, { items }) =>
  state.set('todos', fromJS(items)).set('isLoadingTodos', false)
// Set item and hide loading when get todo daily list
const setDailyTodos = (state, { items }) =>
  state.set('dailyTodos', fromJS(items)).set('isLoadingDaily', false)
// Set item and hide loading when get todo daily list
const setHistories = (state, { items, totalPages }) =>
  state.merge(
    fromJS({
      histories: items,
      isLoadingHistory: false,
      historyPages: totalPages,
    })
  )
// .set('histories', fromJS(items))
// .set('isLoadingHistory', false)
// .set('historyPages', totalPages)
// Clear todos when component unmopunt
const clearTodos = state => state.set('todos', fromJS([]))
// Clear dailytodos when component unmopunt
const clearDailyTodos = state => state.set('dailyTodos', fromJS([]))
// Clear histories when component unmopunt
const clearHistories = state => state.set('histories', fromJS([]))

// Set item when create todo success
const setTodoCreate = (state, { item }) => {
  let todos = state.get('todos')
  let newTodos = todos.push(fromJS(item))
  return state.set('todos', newTodos).set('isLoadingAction', false)
}
// Set item when edit todo success
const setTodoEdit = (state, { item }) => {
  let todos = state.get('todos')
  let newTodos = todos.map(todo => {
    if (todo.get('_id') !== item._id) {
      return todo
    }
    return fromJS(item)
  })
  return state.set('todos', newTodos).set('isLoadingAction', false)
}
// Check and un check reducer
const showLoadingCheck = (state, { id }) =>
  state.setIn(['isLoadingCheck', id], true)
const hideLoadingCheck = (state, { id }) =>
  state.setIn(['isLoadingCheck', id], false)
const setTodoCheck = (state, { item }) => {
  let todos = state.get('todos')
  let newTodos = todos.map(todo => {
    if (todo.get('_id') !== item._id) {
      return todo
    }
    return fromJS(item)
  })
  return state.set('todos', newTodos).setIn(['isLoadingCheck', item._id], false)
}

// Set todo when create daily todo success
const setDailyTodoCreate = (state, { item }) => {
  let todos = state.get('dailyTodos')
  let newTodos = todos.push(fromJS(item))
  return state.set('dailyTodos', newTodos).set('isLoadingAction', false)
}
// Set todo when edit daily todo success
const setDailyTodoEdit = (state, { item }) => {
  let todos = state.get('dailyTodos')
  let newTodos = todos.map(todo => {
    if (todo.get('_id') !== item._id) {
      return todo
    }
    return fromJS(item)
  })
  return state.set('dailyTodos', newTodos).set('isLoadingAction', false)
}

// Set history filter
const setHistoryFilter = (state, { name, value }) =>
  state.setIn(['historyFilter', name], value)
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [TodoTypes.GET_TODOS_REQUEST]: showLoadingTodos,
  [TodoTypes.GET_TODOS_FAILURE]: hideLoadingTodos,
  [TodoTypes.GET_TODOS_SUCCESS]: setTodos,
  [TodoTypes.CLEAR_TODOS]: clearTodos,
  // Get list daily todo reducer
  [TodoTypes.GET_DAILY_TODOS_REQUEST]: showLoadingDaily,
  [TodoTypes.GET_DAILY_TODOS_FAILURE]: hideLoadingDaily,
  [TodoTypes.GET_DAILY_TODOS_SUCCESS]: setDailyTodos,
  [TodoTypes.CLEAR_DAILY_TODOS]: clearDailyTodos,
  // Get list history reducer
  [TodoTypes.GET_HISTORIES_REQUEST]: showLoadingHistory,
  [TodoTypes.GET_HISTORIES_FAILURE]: hideLoadingHistory,
  [TodoTypes.GET_HISTORIES_SUCCESS]: setHistories,
  [TodoTypes.CLEAR_HISTORIES]: clearHistories,
  // Create Item reducer
  [TodoTypes.CREATE_TODO_REQUEST]: showLoadingAction,
  [TodoTypes.CREATE_TODO_SUCCESS]: setTodoCreate,
  [TodoTypes.CREATE_TODO_FAILURE]: hideLoadingAction,
  // Edit Item reducer
  [TodoTypes.EDIT_TODO_REQUEST]: showLoadingAction,
  [TodoTypes.EDIT_TODO_SUCCESS]: setTodoEdit,
  [TodoTypes.EDIT_TODO_FAILURE]: hideLoadingAction,
  // Check Todo Reducer
  [TodoTypes.CHECK_TODO_REQUEST]: showLoadingCheck,
  [TodoTypes.CHECK_TODO_SUCCESS]: setTodoCheck,
  [TodoTypes.CHECK_TODO_FAILURE]: hideLoadingCheck,
  // Uncheck Todo Reducer
  [TodoTypes.UNCHECK_TODO_REQUEST]: showLoadingCheck,
  [TodoTypes.UNCHECK_TODO_SUCCESS]: setTodoCheck,
  [TodoTypes.UNCHECK_TODO_FAILURE]: hideLoadingCheck,
  // Create Daily todo reducer
  [TodoTypes.CREATE_DAILY_TODO_REQUEST]: showLoadingAction,
  [TodoTypes.CREATE_DAILY_TODO_SUCCESS]: setDailyTodoCreate,
  [TodoTypes.CREATE_DAILY_TODO_FAILURE]: hideLoadingAction,
  // Edit Daily todo reducer
  [TodoTypes.EDIT_DAILY_TODO_REQUEST]: showLoadingAction,
  [TodoTypes.EDIT_DAILY_TODO_SUCCESS]: setDailyTodoEdit,
  [TodoTypes.EDIT_DAILY_TODO_FAILURE]: hideLoadingAction,
  // Set history filter
  [TodoTypes.SET_HISTORY_FILTER]: setHistoryFilter,
})

reducerRegistry.register(MODULE_NAME, reducer)
