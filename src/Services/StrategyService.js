import apiClient from './'

// Get strategy detail
export const getStrategyDetail = (token, id) =>
  apiClient.get(
    `/api/strategies/${id}`,
    {},
    { headers: { Authorization: token } }
  )

// Create strategy
export const createStrategy = (token, item) =>
  apiClient.post(`/api/strategies/`, item, {
    headers: { Authorization: token },
  })

// Edit strategy
export const editStrategy = (token, id, item) =>
  apiClient.put(`/api/strategies/${id}`, item, {
    headers: { Authorization: token },
  })
// Delete strategy
export const deleteStrategy = (token, id) =>
  apiClient.delete(
    `/api/strategies/${id}`,
    {},
    { headers: { Authorization: token } }
  )
