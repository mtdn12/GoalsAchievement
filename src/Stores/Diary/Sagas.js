import {
  put,
  call,
  all,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects'
import { DiaryTypes, DiaryActions } from './Actions'
import { NotificationActions } from '../Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import {
  getListDiary,
  createDiary,
  editDiary,
  deleteDiary,
  getDiaryDetail,
} from 'src/Services/DiaryService.js'
import { getToken } from '../Authentication/Selectors'
import { getFilter } from './Selectors'

function* getListDiaryWorker() {
  try {
    const token = yield select(getToken)
    const filter = yield select(getFilter)
    const response = yield call(getListDiary, token, filter.toJS())
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
    const token = yield select(getToken)
    yield put(ModalActions.showLoadingAction())
    const response = yield call(createDiary, token, values)
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

// Get Diary detail worker
function* getDiaryDetailWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getDiaryDetail, token, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put(DiaryActions.getItemSuccess(response.data.item))
  } catch (error) {
    yield put(DiaryActions.getItemFailure())
  }
}

function* watcher() {
  yield all([
    takeLatest(DiaryTypes.GET_ITEMS_REQUEST, getListDiaryWorker),
    takeLatest(DiaryTypes.CREATE_ITEM_REQUEST, createDiaryWorker),
    takeLatest(DiaryTypes.GET_ITEM_REQUEST, getDiaryDetailWorker),
  ])
}
export default watcher
