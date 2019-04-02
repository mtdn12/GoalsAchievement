import apiClient from './'

export const registerUser = values =>
  apiClient.post('api/users/register', values)
