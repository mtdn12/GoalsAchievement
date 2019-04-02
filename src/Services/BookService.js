import apiClient from './'

// get list books
export const getListBook = filter => apiClient.get(`/api/books/`, filter)
// get book detail
export const getBookDetail = id => apiClient.get(`/api/books/${id}`)
// Create new book
export const createBook = values => apiClient.post(`/api/books/`, values)
// Edit  book
export const editBook = (id, values) =>
  apiClient.put(`/api/books/${id}`, values)
// Delete book
export const deleteBook = id => apiClient.delete(`/api/books/${id}`)
// Change status book
export const changeStatus = (id, status) =>
  apiClient.put(`/api/books/status/${id}`, { status })
// Add review to book
export const addReview = (id, values) =>
  apiClient.put(`/api/books/review/${id}`, values)
