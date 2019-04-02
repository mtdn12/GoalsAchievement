import { MODULE_NAME } from './InitialState'
// Get list Book
export const getBooks = state => state[MODULE_NAME].get('items')
// get loading list book
export const getLoadingBooks = state => state[MODULE_NAME].get('isLoadingItems')
// Get book detail
export const getBook = state => state[MODULE_NAME].get('item')
// get loading book detail
export const getLoadingBook = state => state[MODULE_NAME].get('isLoadingItem')
// Get filter
export const getFilter = state => state[MODULE_NAME].get('filter')
