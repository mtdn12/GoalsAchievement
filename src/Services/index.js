import { create } from 'apisauce'
import { Config } from 'src/Config'
import { getToken } from '../Utils/token'

export const apiClient = create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: getToken(),
  },
  timeout: 3000,
})

export default apiClient
