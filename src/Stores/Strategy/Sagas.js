import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { StrategyTypes, StrategyActions } from './Actions'
import { GoalActions } from '../Goal/Actions'
import { ObjectiveActions } from '../Objective/Actions'
import { push } from 'connected-react-router'
import { ModalActions } from '../Modal/Actions'
import { NotificationActions } from '../Notification/Actions'
import {
  getStrategyDetail,
  createStrategy,
  editStrategy,
  deleteStrategy,
} from 'src/Services/StrategyService.js'
import { getToken } from '../Authentication/selectors'

// Get goal detail worker
function* getStrategyDetailWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getStrategyDetail, token, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: StrategyTypes.GET_ITEM_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: StrategyTypes.GET_ITEM_FAILURE,
    })
  }
}
// Create Goal worker
function* createStrategyWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // call api to create goal
    const token = yield select(getToken)
    const response = yield call(createStrategy, token, values)
    // check result from api
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: StrategyTypes.CREATE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Strategy',
        'Create Strategy success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // reload goal detail
    yield put(ObjectiveActions.getItemRequest(values.objectiveId))
  } catch (error) {
    yield put({
      type: StrategyTypes.CREATE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Strategy',
        error.message,
        'red'
      )
    )
    // Hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}
// edit Strategy worker
function* editStrategyWorker({ values, match }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const { id, ...data } = values
    const response = yield call(editStrategy, token, id, data)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: StrategyTypes.EDIT_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Edit Strategy',
        'Edit Strategy success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // check match and do relevant action
    switch (match.path) {
      case '/goal/:id':
        yield put(GoalActions.getItemRequest(values.goalId))
        break
      case '/objective/:id':
        yield put(ObjectiveActions.getItemRequest(values.objectiveId))
        break
      default:
        yield put(StrategyActions.getItemRequest(id))
        break
    }
  } catch (error) {
    // dispatch edit fail action
    yield put({
      type: StrategyTypes.EDIT_ITEM_FAILURE,
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

// delete strategy worker
function* deleteStrategyWorker({ values, match }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const response = yield call(deleteStrategy, token, values._id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: StrategyTypes.DELETE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Delete Strategy',
        'Delete Strategy success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // check match do to another action
    console.log(match.path)
    switch (match.path) {
      case '/objective/:id':
        yield put(ObjectiveActions.getItemRequest(values.objective))
        break
      case '/goal/:id':
        yield put(GoalActions.getItemRequest(values.goal))
        break
      default:
        yield put(push(`/goal/${values.goal}`))
        break
    }
  } catch (error) {
    // dispatch delete fail action
    yield put({
      type: StrategyTypes.DELETE_ITEM_FAILURE,
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
    takeLatest(StrategyTypes.GET_ITEM_REQUEST, getStrategyDetailWorker),
    // Create goal
    takeLatest(StrategyTypes.CREATE_ITEM_REQUEST, createStrategyWorker),
    // Edit goal
    takeLatest(StrategyTypes.EDIT_ITEM_REQUEST, editStrategyWorker),
    // Delete goal
    takeLatest(StrategyTypes.DELETE_ITEM_REQUEST, deleteStrategyWorker),
  ])
}

export default watcher
