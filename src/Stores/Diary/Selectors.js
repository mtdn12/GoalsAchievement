// Get filter
export const getFilter = state => state.diary.get('filter')

// Get list diary
export const getDiaries = state => state.diary.get('items')
// Get loading diaries
export const getLoadingItems = state => state.diary.get('isLoadingItems')
// Get Diary detail
export const getDiary = state => state.diary.get('item')
// get lodaing history
export const getLoadingItem = state => state.diary.get('isLoadingItem')
