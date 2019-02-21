import apiClient from './'

// Get List diary
export const getListDiary = (token, filter) =>
  apiClient.get(
    `/api/diaries/`,
    { ...filter },
    { headers: { Authorization: token } }
  )

// Create new diary
export const createDiary = (token, values) =>
  apiClient.post(
    '/api/diaries/',
    { ...values },
    { headers: { Authorization: token } }
  )

// edit exist diary
export const editDiary = (token, id, values) =>
  apiClient.put(
    `/api/diaries/:${id}`,
    { ...values },
    { headers: { Authorization: token } }
  )

// delete diary
export const deleteDiary = (token, id) =>
  apiClient.delete(
    `/api/diaries/:${id}`,
    {},
    { headers: { Authorization: token } }
  )
// Get diary detail
export const getDiaryDetail = (token, id) =>
  apiClient.get(
    `/api/diaries/:${id}`,
    {},
    { headers: { Authorization: token } }
  )
