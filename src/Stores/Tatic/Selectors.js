// Get objective detail
export const getItem = state => state.tatic.get('item')

// get loading objective detail
export const getLoadingItem = state => state.tatic.get('isLoadingItem')

// Get list history
export const getHistories = state => state.tatic.get('histories')

// Get loading history
export const getLoadingHistories = state =>
  state.tatic.get('isLoadingHistories')
