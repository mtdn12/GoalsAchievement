import {
  put,
  call,
  all,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects'
import { DailyTaskTypes, DailyTaskActions } from './Actions'
import { NotificationActions } from '../Notification/Actions'
import {
  getListTask,
  checkTask,
  uncheckTask,
} from 'src/Services/DailyTaskService.js'
import { getToken } from '../Authentication/Selectors'

// Get List action worker
function* getListTaskWorker() {
  try {
    const token = yield select(getToken)
    const response = yield call(getListTask, token)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: DailyTaskTypes.GET_ITEMS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: DailyTaskTypes.GET_ITEMS_FAILURE,
    })
  }
}

// Check task worker
function* checkTaskWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(checkTask, token, id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: DailyTaskTypes.CHECK_ITEM_SUCCESS,
      item: response.data.item,
    })
    // show success notification
    yield put(
      NotificationActions.showNotification(
        'Check Task',
        'Check task success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: DailyTaskTypes.CHECK_ITEM_FAILURE,
      id,
    })
    yield put(
      NotificationActions.showNotification('Check Task', error.message, 'red')
    )
  }
}
// un Check task worker
function* uncheckTaskWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(uncheckTask, token, id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: DailyTaskTypes.UNCHECK_ITEM_SUCCESS,
      item: response.data.item,
    })
    // show success notification
    yield put(
      NotificationActions.showNotification(
        'unCheck Task',
        'unCheck task success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: DailyTaskTypes.UNCHECK_ITEM_FAILURE,
      id,
    })
    yield put(
      NotificationActions.showNotification('unCheck Task', error.message, 'red')
    )
  }
}

function* watcher() {
  yield all([
    takeLatest(DailyTaskTypes.GET_ITEMS_REQUEST, getListTaskWorker),
    takeEvery(DailyTaskTypes.CHECK_ITEM_REQUEST, checkTaskWorker),
    takeEvery(DailyTaskTypes.UNCHECK_ITEM_REQUEST, uncheckTaskWorker),
  ])
}

export default watcher
