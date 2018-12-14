import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { GoalActions, GoalTypes } from 'src/Stores/Goal/Actions'
import { push } from 'connected-react-router'
import { ModalActions } from '../Modal/Actions'
import { NotificationActions } from '../Notification/Actions'
import {
  getListGoals,
  getGoalDetail,
  createGoal,
  editGoal,
  deleteGoal,
} from 'src/Services/GoalService'
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
// Create Goal worker
function* createGoalWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // call api to create goal
    const token = yield select(getToken)
    const response = yield call(createGoal, token, values)
    // check result from api
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: GoalTypes.CREATE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Goal',
        'Create Goal success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to goal detail
    yield put(push(`/goal/${response.data.item._id}`))
  } catch (error) {
    yield put({
      type: GoalTypes.CREATE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification('Create Goal', error.message, 'red')
    )
    // Hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}
// edit goal worker
function* editGoalWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const { id, ...data } = values
    const response = yield call(editGoal, token, id, data)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: GoalTypes.EDIT_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Edit Goal',
        'Edit Goal success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to detail page
    yield put(push(`/goal/${response.data.item._id}`))
  } catch (error) {
    // dispatch edit fail action
    yield put({
      type: GoalTypes.EDIT_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification('Edit Goal', error.message, 'red')
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}

// delete goal worker
function* deleteGoalWorker({ id }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const response = yield call(deleteGoal, token, id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: GoalTypes.DELETE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Delete Goal',
        'Delete Goal success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // push to detail page
    yield put(push(`/dashboard`))
  } catch (error) {
    // dispatch delete fail action
    yield put({
      type: GoalTypes.DELETE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification('Delete Goal', error.message, 'red')
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(GoalTypes.GET_ITEMS_REQUEST, getListGoalWorker),
    takeLatest(GoalTypes.GET_ITEM_REQUEST, getGoalDetailWorker),
    // Create goal
    takeLatest(GoalTypes.CREATE_ITEM_REQUEST, createGoalWorker),
    // Edit goal
    takeLatest(GoalTypes.EDIT_ITEM_REQUEST, editGoalWorker),
    // Delete goal
    takeLatest(GoalTypes.DELETE_ITEM_REQUEST, deleteGoalWorker),
  ])
}

export default watcher
