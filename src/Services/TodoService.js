import apiClient from './'

// get list todo
export const getListTodo = () => apiClient.get(`/api/todos/`)
// Get list daily todo
export const getListDailyTodo = () => apiClient.get(`/api/dailyTodos/`)
// Get list todo's history
export const getListTodoHistory = filter =>
  apiClient.get(`/api/todoHistories/`, filter)
// Create new todo
export const createTodo = values => apiClient.post(`/api/todos/`, values)
// Edit  Todo
export const editTodo = (id, values) =>
  apiClient.put(`/api/todos/${id}`, values)
// Delete Todo
export const deleteTodo = id => apiClient.delete(`/api/todos/${id}`)
// Check Todo
export const checkTodo = id => apiClient.post(`/api/todos/check/${id}`)
// UnCheck Todo
export const uncheckTodo = id => apiClient.post(`/api/todos/uncheck/${id}`)
// Create new daily todo
export const createDailyTodo = values =>
  apiClient.post(`/api/dailyTodos/`, values)
// Edit  daily Todo
export const editDailyTodo = (id, values) =>
  apiClient.put(`/api/dailyTodos/${id}`, values)
// Delete daily Todo
export const deleteDailyTodo = id => apiClient.delete(`/api/dailyTodos/${id}`)
