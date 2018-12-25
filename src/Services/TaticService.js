import apiClient from './'

// Get Tatic detail
export const getTaticDetail = (token, id) =>
  apiClient.get(`/api/tatics/${id}`, {}, { headers: { Authorization: token } })

// Create Tatic
export const createTatic = (token, item) =>
  apiClient.post(`/api/tatics/`, item, {
    headers: { Authorization: token },
  })

// Edit Tatic
export const editTatic = (token, id, item) =>
  apiClient.put(`/api/tatics/${id}`, item, {
    headers: { Authorization: token },
  })
// Delete Tatic
export const deleteTatic = (token, id) =>
  apiClient.delete(
    `/api/tatics/${id}`,
    {},
    { headers: { Authorization: token } }
  )
// Get list History
export const getListHistory = (token, id) =>
  apiClient.get(
    `/api/histories/${id}`,
    {},
    {
      headers: { Authorization: token },
    }
  )
