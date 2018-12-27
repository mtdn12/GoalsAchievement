// Get list Book
export const getBooks = state => state.book.get('items')
// get loading list book
export const getLoadingBooks = state => state.book.get('isLoadingItems')
// Get book detail
export const getBook = state => state.book.get('item')
// get loading book detail
export const getLoadingBook = state => state.book.get('isLoadingItem')
// Get filter
export const getFilter = state => state.book.get('filter')
