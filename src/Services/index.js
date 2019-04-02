import { create } from 'apisauce'
import { Config } from 'src/Config'

export const apiClient = create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: '',
  },
  timeout: 3000,
})

export default apiClient
