import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get list diary
    getItemsRequest: null,
    getItemsSuccess: ['items', 'totalPages'],
    getItemsFailure: null,
    clearItems: null,
    // Create diary
    createItemRequest: ['values'],
    createItemSuccess: ['item'],
    createItemFailure: null,
    // Edit diary
    editItemRequest: ['values'],
    editItemSuccess: ['item'],
    editItemFailure: null,
    // Delete Todo
    deleteItemRequest: ['values'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
    // Set diary filter
    setHistoryFilter: ['name', 'value'],
    // Get diary detail
    getItemRequest: ['id'],
    getItemSuccess: ['item'],
    getItemFailure: null,
    clearItem: null,
  },
  {
    prefix: '@@Diary/',
  }
)

export const DiaryTypes = Types
export const DiaryActions = Creators
