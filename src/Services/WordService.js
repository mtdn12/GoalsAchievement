import apiClient from './'

// get list word
export const getListWord = (token, filter) =>
  apiClient.get(
    `/api/words/`,
    { ...filter },
    { headers: { Authorization: token } }
  )
// Get word detail
export const getWordDetail = (token, id) =>
  apiClient.get(`/api/words/${id}`, {}, { headers: { Authorization: token } })
// Create new word
export const createWord = (token, values) =>
  apiClient.post(
    `/api/words/`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Edit  word
export const editWord = (token, id, values) =>
  apiClient.put(
    `/api/words/${id}`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Delete word
export const deleteWord = (token, id) =>
  apiClient.delete(
    `/api/words/${id}`,
    {},
    { headers: { Authorization: token } }
  )
// Check done recall
export const checkRecall = (token, id) =>
  apiClient.post(
    `/api/words/check/${id}`,
    {},
    { headers: { Authorization: token } }
  )
