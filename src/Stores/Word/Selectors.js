// Get list Word
export const getWords = state => state.word.get('items')
// get loading list word
export const getLoadingWords = state => state.word.get('isLoadingItems')
// Get filter
export const getFilter = state => state.word.get('filter')
// Get loading check
export const getLoadingCheck = state => state.word.get('isLoadingCheck')
// get Word detail
export const getWord = state => state.word.get('item')
// Get loading word
export const getLoadingWord = state => state.word.get('isLoadingItem')
