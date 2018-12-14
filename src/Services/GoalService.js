import apiClient from './'

// Get list goal
export const getListGoals = token =>
  apiClient.get('/api/goals/', {}, { headers: { Authorization: token } })

// Get Goal detail
export const getGoalDetail = (token, id) =>
  apiClient.get(`/api/goals/${id}`, {}, { headers: { Authorization: token } })

// Create Goal
export const createGoal = (token, item) =>
  apiClient.post(`/api/goals/`, item, { headers: { Authorization: token } })

// Edit goal
export const editGoal = (token, id, item) =>
  apiClient.put(`/api/goals/${id}`, item, { headers: { Authorization: token } })
// Delete Goal
export const deleteGoal = (token, id) =>
  apiClient.delete(
    `/api/goals/${id}`,
    {},
    { headers: { Authorization: token } }
  )
