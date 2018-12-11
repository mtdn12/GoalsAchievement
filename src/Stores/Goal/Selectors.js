// Get list goals
export const getGoals = state => state.goal.get('items')
// Get Loading list goal
export const getLoadingItems = state => state.goal.get('isLoadingItems')
// Get Goal detail
export const getGoal = state => state.goal.get('item')
// Get Loading goal detail
export const getLoadingItem = state => state.goal.get('isLoadingItem')
