import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get list word
    getItemsRequest: ['filter'],
    getItemsSuccess: ['items'],
    getItemsFailure: null,
    clearItems: null,
    // Get word detail
    getItemRequest: ['id'],
    getItemSuccess: ['item'],
    getItemFailure: null,
    clearItem: null,
    // Create new word
    createItemRequest: ['values'],
    createItemSuccess: null,
    createItemFailure: null,
    // Edit existing word
    editItemRequest: ['values'],
    editItemSuccess: null,
    editItemFailure: null,
    // Delete existing word
    deleteItemRequest: ['values'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
    // set filter
    setFilter: ['name', 'value'],
    // Check word recall
    checkRecallRequest: ['id'],
    checkRecallSuccess: ['id'],
    checkRecallFailure: ['id'],
    //
  },
  {
    prefix: '@@Word/',
  }
)

export const WordTypes = Types
export const WordActions = Creators
