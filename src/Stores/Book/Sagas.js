import {
  put,
  call,
  all,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects'
import { BookTypes, BookActions } from './Actions'
import { NotificationActions } from '../Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import {
  getListBook,
  editBook,
  createBook,
  deleteBook,
  addReview,
  changeStatus,
  getBookDetail,
} from 'src/Services/BookService.js'
import { getFilter } from './Selectors'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'
// Get List action worker
function* getListBookWorker({ filter }) {
  try {
    const response = yield call(getListBook, filter)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: BookTypes.GET_ITEMS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: BookTypes.GET_ITEMS_FAILURE,
    })
  }
}

// Create book worker
function* createBookWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(createBook, values)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: BookTypes.CREATE_ITEM_SUCCESS,
    })
    // Check if current status of list if match with new item create reload list
    const filter = yield select(getFilter)
    if (filter.get('status') === values.status) {
      yield put(BookActions.getItemsRequest(filter.toJS()))
    }
    yield put(
      NotificationActions.showNotification(
        'Create book',
        'Create book success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to goal detail
  } catch (error) {
    yield put({
      type: BookTypes.CREATE_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Create book', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

// Edit book worker
function* editBookWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const { id, ...data } = values
    const response = yield call(editBook, id, data)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: BookTypes.EDIT_ITEM_SUCCESS,
    })
    // Check if current status of list if match with new item create reload list
    const filter = yield select(getFilter)
    yield put(BookActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Edit book',
        'Edit book success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to goal detail
  } catch (error) {
    yield put({
      type: BookTypes.EDIT_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Edit book', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

// Delete book worker
function* deleteBookWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(deleteBook, values._id)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: BookTypes.DELETE_ITEM_SUCCESS,
    })
    const filter = yield select(getFilter)
    yield put(BookActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Delete book',
        'Delete book success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to goal detail
  } catch (error) {
    yield put({
      type: BookTypes.DELETE_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Delete book', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}
// Change status worker
function* changeStatusWorker({ id, status }) {
  try {
    const response = yield call(changeStatus, id, status)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: BookTypes.CHANGE_STATUS_SUCCESS,
    })
    const filter = yield select(getFilter)
    yield put(BookActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Change status',
        'Change status success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: BookTypes.CHANGE_STATUS_FAILURE,
    })
    yield put(
      NotificationActions.showNotification(
        'change status',
        error.message,
        'red'
      )
    )
  }
}

// Get book detail worker
function* getBookDetailWorker({ id }) {
  try {
    const response = yield call(getBookDetail, id)
    console.log(response.data)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: BookTypes.GET_ITEM_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: BookTypes.GET_ITEM_FAILURE,
    })
  }
}

// Add book review worker
function* addReviewWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const { id, ...data } = values
    const response = yield call(addReview, id, data)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: BookTypes.ADD_REVIEW_SUCCESS,
    })
    // reload detail page
    yield put(BookActions.getItemRequest(id))
    yield put(
      NotificationActions.showNotification(
        'Add review',
        'Add review success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to goal detail
  } catch (error) {
    yield put({
      type: BookTypes.ADD_REVIEW_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('add Review', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(BookTypes.GET_ITEMS_REQUEST, getListBookWorker),
    takeLatest(BookTypes.CREATE_ITEM_REQUEST, createBookWorker),
    takeLatest(BookTypes.EDIT_ITEM_REQUEST, editBookWorker),
    takeLatest(BookTypes.DELETE_ITEM_REQUEST, deleteBookWorker),
    takeLatest(BookTypes.CHANGE_STATUS_REQUEST, changeStatusWorker),
    takeLatest(BookTypes.GET_ITEM_REQUEST, getBookDetailWorker),
    takeLatest(BookTypes.ADD_REVIEW_REQUEST, addReviewWorker),
  ])
}
sagaRegistry.register(MODULE_NAME, watcher)
