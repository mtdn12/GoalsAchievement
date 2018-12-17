import apiClient from './'

// Get Objective detail
export const getObjectiveDetail = (token, id) =>
  apiClient.get(
    `/api/objectives/${id}`,
    {},
    { headers: { Authorization: token } }
  )

// Create Objective
export const createObjective = (token, item) =>
  apiClient.post(`/api/objectives/`, item, {
    headers: { Authorization: token },
  })

// Edit Objective
export const editObjective = (token, id, item) =>
  apiClient.put(`/api/objectives/${id}`, item, {
    headers: { Authorization: token },
  })
// Delete Objective
export const deleteObjective = (token, id) =>
  apiClient.delete(
    `/api/objectives/${id}`,
    {},
    { headers: { Authorization: token } }
  )
