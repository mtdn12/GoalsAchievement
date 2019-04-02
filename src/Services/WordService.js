import apiClient from './'

// get list word
export const getListWord = filter => apiClient.get(`/api/words/`, filter)
// Get word detail
export const getWordDetail = id => apiClient.get(`/api/words/${id}`)
// Create new word
export const createWord = values => apiClient.post(`/api/words/`, values)
// Edit  word
export const editWord = (id, values) =>
  apiClient.put(`/api/words/${id}`, values)
// Delete word
export const deleteWord = id => apiClient.delete(`/api/words/${id}`)
// Check done recall
export const checkRecall = id => apiClient.post(`/api/words/check/${id}`)
