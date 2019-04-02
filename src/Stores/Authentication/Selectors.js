import { MODULE_NAME } from './InitialState'
// Get auth
export const getAuth = state => state[MODULE_NAME].get('auth')
