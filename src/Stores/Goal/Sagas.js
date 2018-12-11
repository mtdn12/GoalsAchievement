import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { GoalActions, GoalTypes } from 'src/Stores/Goal/Actions'
import { getListGoals, getGoalDetail } from 'src/Services/GoalService'
import { getToken } from '../Authentication/selectors'

// Get list goal worker
function* getListGoalWorker() {
  try {
    const token = yield select(getToken)
    const response = yield call(getListGoals, token)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: GoalTypes.GET_ITEMS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: GoalTypes.GET_ITEMS_FAILURE,
    })
  }
}

// Get goal detail worker
function* getGoalDetailWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getGoalDetail, token, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: GoalTypes.GET_ITEM_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: GoalTypes.GET_ITEM_FAILURE,
    })
  }
}

function* watcher() {
  yield all([
    takeLatest(GoalTypes.GET_ITEMS_REQUEST, getListGoalWorker),
    takeLatest(GoalTypes.GET_ITEM_REQUEST, getGoalDetailWorker),
  ])
}

export default watcher
