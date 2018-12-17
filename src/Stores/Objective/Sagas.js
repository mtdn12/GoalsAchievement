import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { ObjectiveTypes, ObjectiveActions } from '../Objective/Actions'
import { GoalActions } from '../Goal/Actions'
import { push } from 'connected-react-router'
import { ModalActions } from '../Modal/Actions'
import { NotificationActions } from '../Notification/Actions'
import {
  getObjectiveDetail,
  createObjective,
  editObjective,
  deleteObjective,
} from 'src/Services/ObjectiveService'
import { getToken } from '../Authentication/selectors'

// Get goal detail worker
function* getObjectiveDetailWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getObjectiveDetail, token, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: ObjectiveTypes.GET_ITEM_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: ObjectiveTypes.GET_ITEM_FAILURE,
    })
  }
}
// Create Goal worker
function* createObjectiveWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // call api to create goal
    const token = yield select(getToken)
    const response = yield call(createObjective, token, values)
    // check result from api
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: ObjectiveTypes.CREATE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Objective',
        'Create Objective success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // reload goal detail
    yield put(GoalActions.getItemRequest(values.goalId))
  } catch (error) {
    yield put({
      type: ObjectiveTypes.CREATE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Objective',
        error.message,
        'red'
      )
    )
    // Hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}
// edit goal worker
function* editObjectiveWorker({ values, match }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const { id, ...data } = values
    const response = yield call(editObjective, token, id, data)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: ObjectiveTypes.EDIT_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Edit Objective',
        'Edit Objective success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // reload goal detail
    switch (match.path) {
      case '/goal/:id':
        yield put(GoalActions.getItemRequest(values.goalId))
        break
      default:
        yield put(ObjectiveActions.getItemRequest(id))
        break
    }
  } catch (error) {
    // dispatch edit fail action
    yield put({
      type: ObjectiveTypes.EDIT_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Edit Objective',
        error.message,
        'red'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}

// delete goal worker
function* deleteObjectiveWorker({ id, goalId, match }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const response = yield call(deleteObjective, token, id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: ObjectiveTypes.DELETE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Delete Objective',
        'Delete Objective success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // Check path and do action
    switch (match.path) {
      case '/goal/:id':
        yield put(GoalActions.getItemRequest(goalId))
        break
      default:
        yield put(push(`/goal/${goalId}`))
        break
    }
  } catch (error) {
    // dispatch delete fail action
    yield put({
      type: ObjectiveTypes.DELETE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Delete Objective',
        error.message,
        'red'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(ObjectiveTypes.GET_ITEM_REQUEST, getObjectiveDetailWorker),
    // Create goal
    takeLatest(ObjectiveTypes.CREATE_ITEM_REQUEST, createObjectiveWorker),
    // Edit goal
    takeLatest(ObjectiveTypes.EDIT_ITEM_REQUEST, editObjectiveWorker),
    // Delete goal
    takeLatest(ObjectiveTypes.DELETE_ITEM_REQUEST, deleteObjectiveWorker),
  ])
}

export default watcher
