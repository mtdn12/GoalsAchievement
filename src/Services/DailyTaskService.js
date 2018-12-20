import apiClient from './'

// Get List daily task
export const getListTask = token =>
  apiClient.get(`/api/dailytasks/`, {}, { headers: { Authorization: token } })

// check task Done
export const checkTask = (token, id) =>
  apiClient.post(`/api/dailytasks/check/${id}`, id, {
    headers: { Authorization: token },
  })

// un check task Done
export const uncheckTask = (token, id) =>
  apiClient.post(`/api/dailytasks/uncheck/${id}`, id, {
    headers: { Authorization: token },
  })
