// Get list Task
export const getTasks = state => state.dailyTask.get('items')

// get loading list Task
export const getLoadingTasks = state => state.dailyTask.get('isLoadingItems')

// get Loading check
export const getLoadingCheck = state => state.dailyTask.get('isLoadingCheck')
