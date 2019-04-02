import { MODULE_NAME } from './InitialState'
// Get list Word
export const getWords = state => state[MODULE_NAME].get('items')
// get loading list word
export const getLoadingWords = state => state[MODULE_NAME].get('isLoadingItems')
// Get filter
export const getFilter = state => state[MODULE_NAME].get('filter')
// Get loading check
export const getLoadingCheck = state => state[MODULE_NAME].get('isLoadingCheck')
// get Word detail
export const getWord = state => state[MODULE_NAME].get('item')
// Get loading word
export const getLoadingWord = state => state[MODULE_NAME].get('isLoadingItem')
