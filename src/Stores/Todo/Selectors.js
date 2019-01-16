// Get list todos
export const getTodos = state => state.todo.get('todos')
// Get lodaing list todo
export const getLoadingTodos = state => state.todo.get('isLoadingTodos')
// Get list daily Task
export const getDailyTodos = state => state.todo.get('dailyTodos')
// Get loading daily todos
export const getLoadingDailyTodos = state => state.todo.get('isLoadingDaily')
// Get list history
export const getHistories = state => state.todo.get('histories')
// Get loading history
export const getLoadingHistories = state => state.todo.get('isLoadingHistory')
// Get loading action
export const getLoadingAction = state => state.todo.get('isLoadingAction')
// Get Loading Check
export const getLoadingCheck = state => state.todo.get('isLoadingCheck')
// Get Histories filter
export const getHistoryFilter = state => state.todo.get('historyFilter')
// Get history pages
export const getHistoryPages = state => state.todo.get('historyPages')
