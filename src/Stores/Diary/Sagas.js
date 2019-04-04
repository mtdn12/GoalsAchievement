import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { DiaryTypes, DiaryActions } from './Actions'
import { NotificationActions } from '../Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import { push } from 'connected-react-router'
import {
  getListDiary,
  createDiary,
  editDiary,
  deleteDiary,
  getDiaryDetail,
} from 'src/Services/DiaryService.js'

import { getFilter } from './Selectors'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'

function* getListDiaryWorker() {
  try {
    const filter = yield select(getFilter)
    const response = yield call(getListDiary, filter.toJS())
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put(
      DiaryActions.getItemsSuccess(
        response.data.items,
        response.data.totalPages
      )
    )
  } catch (error) {
    yield put(DiaryActions.getItemsFailure())
  }
}

function* createDiaryWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(createDiary, values)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put(DiaryActions.createItemSuccess(response.data.item))
    yield put(ModalActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    yield put(
      NotificationActions.showNotification(
        'Create Diary',
        'Create diary success',
        'blue'
      )
    )
  } catch (error) {
    yield put(DiaryActions.createItemFailure())
    yield put(
      NotificationActions.showNotification('Create diary', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}
// Edit diary worker
function* editDiaryWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const { id, ...data } = values
    const response = yield call(editDiary, id, data)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put(DiaryActions.editItemSuccess(response.data.item))
    yield put(ModalActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    yield put(
      NotificationActions.showNotification(
        'Edit Diary',
        'Edit diary success',
        'blue'
      )
    )
  } catch (error) {
    yield put(DiaryActions.editItemFailure())
    yield put(
      NotificationActions.showNotification('Edit diary', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

// Get Diary detail worker
function* getDiaryDetailWorker({ id }) {
  try {
    const response = yield call(getDiaryDetail, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put(DiaryActions.getItemSuccess(response.data.item))
  } catch (error) {
    yield put(DiaryActions.getItemFailure())
  }
}
// Delete diary worker
function* deleteDiaryWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(deleteDiary, values._id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put(DiaryActions.deleteItemSuccess())
    yield put(ModalActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    yield put(push('/diary'))
    yield put(
      NotificationActions.showNotification(
        'Delete diary',
        'Delete Diary success',
        'blue'
      )
    )
  } catch (error) {
    yield put(DiaryActions.deleteItemFailure())
    yield put(
      NotificationActions.showNotification('Delete diary', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(DiaryTypes.GET_ITEMS_REQUEST, getListDiaryWorker),
    takeLatest(DiaryTypes.CREATE_ITEM_REQUEST, createDiaryWorker),
    takeLatest(DiaryTypes.GET_ITEM_REQUEST, getDiaryDetailWorker),
    takeLatest(DiaryTypes.EDIT_ITEM_REQUEST, editDiaryWorker),
    takeLatest(DiaryTypes.DELETE_ITEM_REQUEST, deleteDiaryWorker),
  ])
}
sagaRegistry.register(MODULE_NAME, watcher)
