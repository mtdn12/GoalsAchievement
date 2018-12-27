import apiClient from './'

// get list books
export const getListBook = (token, filter) =>
  apiClient.get(
    `/api/books/`,
    { ...filter },
    { headers: { Authorization: token } }
  )
// get book detail
export const getBookDetail = (token, id) =>
  apiClient.get(`/api/books/${id}`, {}, { headers: { Authorization: token } })
// Create new book
export const createBook = (token, values) =>
  apiClient.post(
    `/api/books/`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Edit  book
export const editBook = (token, id, values) =>
  apiClient.put(
    `/api/books/${id}`,
    { ...values },
    { headers: { Authorization: token } }
  )
// Delete book
export const deleteBook = (token, id) =>
  apiClient.delete(
    `/api/books/${id}`,
    {},
    { headers: { Authorization: token } }
  )
// Change status book
export const changeStatus = (token, id, status) =>
  apiClient.put(
    `/api/books/status/${id}`,
    { status },
    { headers: { Authorization: token } }
  )
// Add review to book
export const addReview = (token, id, values) =>
  apiClient.put(
    `/api/books/review/${id}`,
    { ...values },
    { headers: { Authorization: token } }
  )
