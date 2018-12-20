import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { ActionTypes, ActionActions } from './Actions'
import { ModalActions } from '../Modal/Actions'
import { NotificationActions } from '../Notification/Actions'
import {
  getListAction,
  createAction,
  editAction,
  deleteAction,
} from 'src/Services/ActionService.js'
import { getToken } from '../Authentication/Selectors'

// Get List action worker
function* getListActionWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getListAction, token, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: ActionTypes.GET_ITEMS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: ActionTypes.GET_ITEMS_FAILURE,
    })
  }
}
// Create Action worker
function* createActionWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // call api to create goal
    const token = yield select(getToken)
    const response = yield call(createAction, token, values)
    // check result from api
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: ActionTypes.CREATE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Action',
        'Create Action success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // Reload list action
    yield put(ActionActions.getItemsRequest(values.taticId))
  } catch (error) {
    yield put({
      type: ActionTypes.CREATE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Action',
        error.message,
        'red'
      )
    )
    // Hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}
// edit Tatic worker
function* editActionWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const { id, ...data } = values
    const response = yield call(editAction, token, id, data)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: ActionTypes.EDIT_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Edit Action',
        'Edit Action success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // Reload actions list
    yield put(ActionActions.getItemsRequest(values.taticId))
  } catch (error) {
    // dispatch edit fail action
    yield put({
      type: ActionTypes.EDIT_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification('Edit Tatic', error.message, 'red')
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}

// delete strategy worker
function* deleteActionWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const response = yield call(deleteAction, token, values._id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: ActionTypes.DELETE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Delete Action',
        'Delete Action success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // reload list action
    yield put(ActionActions.getItemsRequest(values.tatic))
  } catch (error) {
    // dispatch delete fail action
    yield put({
      type: ActionTypes.DELETE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification('Delete Tatic', error.message, 'red')
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(ActionTypes.GET_ITEMS_REQUEST, getListActionWorker),
    // Create goal
    takeLatest(ActionTypes.CREATE_ITEM_REQUEST, createActionWorker),
    // Edit goal
    takeLatest(ActionTypes.EDIT_ITEM_REQUEST, editActionWorker),
    // Delete goal
    takeLatest(ActionTypes.DELETE_ITEM_REQUEST, deleteActionWorker),
  ])
}

export default watcher
