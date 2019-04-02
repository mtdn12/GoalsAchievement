import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Get list book
    getItemsRequest: ['filter'],
    getItemsSuccess: ['items'],
    getItemsFailure: null,
    clearItems: null,
    // Get book detail
    getItemRequest: ['id'],
    getItemSuccess: ['item'],
    getItemFailure: null,
    clearItem: null,
    // Create new book
    createItemRequest: ['values'],
    createItemSuccess: null,
    createItemFailure: null,
    // Edit existing book
    editItemRequest: ['values'],
    editItemSuccess: null,
    editItemFailure: null,
    // Delete existing book
    deleteItemRequest: ['values'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
    // Change status
    changeStatusRequest: ['id', 'status'],
    changeStatusSuccess: null,
    changeStatusFailure: null,
    // Add review
    addReviewRequest: ['values'],
    addReviewSuccess: ['item'],
    addReviewFailure: null,
    // set filter
    setFilter: ['name', 'value'],
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const BookTypes = Types
export const BookActions = Creators
