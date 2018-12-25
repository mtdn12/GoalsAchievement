import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get Objective detail
    getItemRequest: ['id'],
    getItemSuccess: null,
    getItemFailure: null,
    clearItem: null,
    // Create new objective
    createItemRequest: ['values'],
    createItemSuccess: null,
    createItemFailure: null,
    // Edit Objective
    editItemRequest: ['values', 'match'],
    editItemSuccess: null,
    editItemFailure: null,
    // Delete Objective
    deleteItemRequest: ['values', 'match'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
    // Get list history
    getHistoriesRequest: ['id'],
    getHistoriesSuccess: ['items'],
    getHistoriesFailure: null,
    clearHistories: null,
  },
  {
    prefix: 'tatic/',
  }
)

export const TaticTypes = Types
export const TaticActions = Creators
