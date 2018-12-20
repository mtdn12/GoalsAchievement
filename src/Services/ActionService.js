import apiClient from './'

// Get List action match with tatic id
export const getListAction = (token, id) =>
  apiClient.get(`/api/actions/${id}`, {}, { headers: { Authorization: token } })

// Create Action
export const createAction = (token, item) =>
  apiClient.post(`/api/actions/`, item, {
    headers: { Authorization: token },
  })

// Edit Action
export const editAction = (token, id, item) =>
  apiClient.put(`/api/actions/${id}`, item, {
    headers: { Authorization: token },
  })
// Delete Action
export const deleteAction = (token, id) =>
  apiClient.delete(
    `/api/actions/${id}`,
    {},
    { headers: { Authorization: token } }
  )
