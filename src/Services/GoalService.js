import apiClient from './'

// Get list goal
export const getListGoals = token =>
  apiClient.get('/api/goals/', {}, { headers: { Authorization: token } })

// Get Goal detail
export const getGoalDetail = (token, id) =>
  apiClient.get(`/api/goals/${id}`, {}, { headers: { Authorization: token } })
