import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get list daily task
    getItemsRequest: ['id'],
    getItemsSuccess: null,
    getItemsFailure: null,
    clearItems: null,
    // Check task done
    checkItemRequest: ['id'],
    checkItemSuccess: null,
    checkItemFailure: null,
    // unCheck task
    uncheckItemRequest: ['id'],
    uncheckItemSuccess: null,
    uncheckItemFailure: null,
  },
  {
    prefix: '@@dailyTask/',
  }
)

export const DailyTaskTypes = Types
export const DailyTaskActions = Creators
