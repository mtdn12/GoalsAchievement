import { MODULE_NAME } from './InitialState'
// Get filter
export const getFilter = state => state[MODULE_NAME].get('filter')
// Get list diary
export const getDiaries = state => state[MODULE_NAME].get('items')
// Get loading diaries
export const getLoadingItems = state => state[MODULE_NAME].get('isLoadingItems')
// Get Diary detail
export const getDiary = state => state[MODULE_NAME].get('item')
// get lodaing history
export const getLoadingItem = state => state[MODULE_NAME].get('isLoadingItem')
