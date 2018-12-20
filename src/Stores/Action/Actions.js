import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get Objective detail
    getItemsRequest: ['id'],
    getItemsSuccess: null,
    getItemsFailure: null,
    clearItems: null,
    // Create new objective
    createItemRequest: ['values'],
    createItemSuccess: null,
    createItemFailure: null,
    // Edit Objective
    editItemRequest: ['values'],
    editItemSuccess: null,
    editItemFailure: null,
    // Delete Objective
    deleteItemRequest: ['values'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
  },
  {
    prefix: '@@action/',
  }
)

export const ActionTypes = Types
export const ActionActions = Creators
