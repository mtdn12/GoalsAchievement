import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get list daily task
    getItemsRequest: ['id'],
    getItemsSuccess: ['items'],
    getItemsFailure: null,
    clearItems: null,
    // Check task done
    checkItemRequest: ['id'],
    checkItemSuccess: ['item'],
    checkItemFailure: ['id'],
    // unCheck task
    uncheckItemRequest: ['id'],
    uncheckItemSuccess: ['item'],
    uncheckItemFailure: ['id'],
  },
  {
    prefix: '@@dailyTask/',
  }
)

export const DailyTaskTypes = Types
export const DailyTaskActions = Creators
