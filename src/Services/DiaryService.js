import apiClient from './'

// Get List diary
export const getListDiary = filter => apiClient.get(`/api/diaries/`, filter)

// Create new diary
export const createDiary = values => apiClient.post('/api/diaries/', values)

// edit exist diary
export const editDiary = (id, values) =>
  apiClient.put(`/api/diaries/${id}`, values)

// delete diary
export const deleteDiary = id => apiClient.delete(`/api/diaries/${id}`)
// Get diary detail
export const getDiaryDetail = id => apiClient.get(`/api/diaries/${id}`)
