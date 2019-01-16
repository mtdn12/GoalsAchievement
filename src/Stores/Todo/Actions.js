import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get list todo
    getTodosRequest: null,
    getTodosSuccess: ['items'],
    getTodosFailure: null,
    clearTodos: null,
    // Get list daily todo
    getDailyTodosRequest: null,
    getDailyTodosSuccess: ['items'],
    getDailyTodosFailure: null,
    clearDailyTodos: null,
    // Get list history
    getHistoriesRequest: null,
    getHistoriesSuccess: ['items', 'totalPages'],
    getHistoriesFailure: null,
    clearHistories: null,
    // Create todo
    createTodoRequest: ['values', 'callback'],
    createTodoSuccess: ['item'],
    createTodoFailure: null,
    // Edit todo
    editTodoRequest: ['values', 'callback'],
    editTodoSuccess: ['item'],
    editTodoFailure: null,
    // Delete Todo
    deleteTodoRequest: ['values'],
    deleteTodoSuccess: null,
    deleteTodoFailure: null,
    // Check todo
    checkTodoRequest: ['id'],
    checkTodoSuccess: ['item'],
    checkTodoFailure: ['id'],
    // Uncheck Todo
    uncheckTodoRequest: ['id'],
    uncheckTodoSuccess: ['item'],
    uncheckTodoFailure: ['id'],
    // Create daily Todo
    createDailyTodoRequest: ['values', 'callback'],
    createDailyTodoSuccess: ['item'],
    createDailyTodoFailure: null,
    // Edit daily Todo
    editDailyTodoRequest: ['values', 'callback'],
    editDailyTodoSuccess: ['item'],
    editDailyTodoFailure: null,
    // Delete Todo
    deleteDailyTodoRequest: ['values'],
    deleteDailyTodoSuccess: null,
    deleteDailyTodoFailure: null,
    // Set history filter
    setHistoryFilter: ['name', 'value'],
  },
  {
    prefix: '@@Todo/',
  }
)

export const TodoTypes = Types
export const TodoActions = Creators
