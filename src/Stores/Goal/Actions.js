import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get list goal
    getItemsRequest: null,
    getItemsSuccess: ['items'],
    getItemsFailure: null,
    clearItems: null,
    // Get goal detail
    getItemRequest: ['id'],
    getItemSuccess: ['item'],
    getItemFailure: null,
    clearItem: null,
    // Create Goal
    createItemRequest: ['values'],
    createItemSuccess: null,
    createItemFailure: null,
    // Edit Goal
    editItemRequest: ['values'],
    editItemSuccess: null,
    editItemFailure: null,
    // Delete goal
    deleteItemRequest: ['id'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
  },
  {
    prefix: 'goal/',
  }
)

export const GoalTypes = Types
export const GoalActions = Creators
