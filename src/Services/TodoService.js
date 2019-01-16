import apiClient from './'

// get list todo
export const getListTodo = token =>
  apiClient.get(`/api/todos/`, {}, { headers: { Authorization: token } })
// Get list daily todo
export const getListDailyTodo = token =>
  apiClient.get(`/api/dailyTodos/`, {}, { headers: { Authorization: token } })
// Get list todo's history
export const getListTodoHistory = (token, filter) =>
  apiClient.get(
    `/api/todoHistories/`,
    { ...filter },
    { headers: { Authorization: token } }
  )
// Create new todo
export const createTodo = (token, values) =>
  apiClient.post(
    `/api/todos/`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Edit  Todo
export const editTodo = (token, id, values) =>
  apiClient.put(
    `/api/todos/${id}`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Delete Todo
export const deleteTodo = (token, id) =>
  apiClient.delete(
    `/api/todos/${id}`,
    {},
    { headers: { Authorization: token } }
  )
// Check Todo
export const checkTodo = (token, id) =>
  apiClient.post(
    `/api/todos/check/${id}`,
    {},
    { headers: { Authorization: token } }
  )
// UnCheck Todo
export const uncheckTodo = (token, id) =>
  apiClient.post(
    `/api/todos/uncheck/${id}`,
    {},
    { headers: { Authorization: token } }
  )
// Create new daily todo
export const createDailyTodo = (token, values) =>
  apiClient.post(
    `/api/dailyTodos/`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Edit  daily Todo
export const editDailyTodo = (token, id, values) =>
  apiClient.put(
    `/api/dailyTodos/${id}`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Delete daily Todo
export const deleteDailyTodo = (token, id) =>
  apiClient.delete(
    `/api/dailyTodos/${id}`,
    {},
    { headers: { Authorization: token } }
  )
