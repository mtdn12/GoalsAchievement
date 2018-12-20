import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { TaticTypes, TaticActions } from './Actions'
import { GoalActions } from '../Goal/Actions'
import { ObjectiveActions } from '../Objective/Actions'
import { StrategyActions } from '../Strategy/Actions'
import { push } from 'connected-react-router'
import { ModalActions } from '../Modal/Actions'
import { NotificationActions } from '../Notification/Actions'
import {
  getTaticDetail,
  createTatic,
  editTatic,
  deleteTatic,
} from 'src/Services/TaticService.js'
import { getToken } from '../Authentication/Selectors'

// Get tatic detail worker
function* getTaticDetailWorker({ id }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getTaticDetail, token, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TaticTypes.GET_ITEM_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: TaticTypes.GET_ITEM_FAILURE,
    })
  }
}
// Create Goal worker
function* createTaticWorker({ values }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // call api to create goal
    const token = yield select(getToken)
    const response = yield call(createTatic, token, values)
    // check result from api
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: TaticTypes.CREATE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Create Tatic',
        'Create Tatic success',
        'blue'
      )
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // reload strategy detail
    yield put(StrategyActions.getItemRequest(values.strategyId))
  } catch (error) {
    yield put({
      type: TaticTypes.CREATE_ITEM_FAILURE,
    })
    // show notification
    yield put(
      NotificationActions.showNotification('Create Tatic', error.message, 'red')
    )
    // Hide loading action
    yield put(ModalActions.hideLoadingAction())
  }
}
// edit Tatic worker
function* editTaticWorker({ values, match }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const { id, ...data } = values
    const response = yield call(editTatic, token, id, data)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: TaticTypes.EDIT_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Edit Tatic',
        'Edit Tatic success',
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
        yield put(ObjectiveActions.getItemRequest(match.params.id))
        break
      case '/strategy/:id':
        yield put(StrategyActions.getItemRequest(values.strategyId))
        break
      default:
        yield put(TaticActions.getItemRequest(id))
        break
    }
  } catch (error) {
    // dispatch edit fail action
    yield put({
      type: TaticTypes.EDIT_ITEM_FAILURE,
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
function* deleteTaticWorker({ values, match }) {
  try {
    // Show loading action
    yield put(ModalActions.showLoadingAction())
    // Call api
    const token = yield select(getToken)
    const response = yield call(deleteTatic, token, values._id)
    // check response error
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    // dispatch success action
    yield put({
      type: TaticTypes.DELETE_ITEM_SUCCESS,
    })
    // show notification
    yield put(
      NotificationActions.showNotification(
        'Delete Tatic',
        'Delete Tatic success',
        'blue'
      )
    )
    // hide loading action
    yield put(ModalActions.hideLoadingAction())
    // clear modal
    yield put(ModalActions.clearModal())
    // check match do to another action
    switch (match.path) {
      case '/objective/:id':
        yield put(ObjectiveActions.getItemRequest(match.params.id))
        break
      case '/goal/:id':
        yield put(GoalActions.getItemRequest(match.params.id))
        break
      case '/strategy/:id':
        yield put(StrategyActions.getItemRequest(match.params.id))
        break
      default:
        yield put(push(`/goal/${values.goal}`))
        break
    }
  } catch (error) {
    // dispatch delete fail action
    yield put({
      type: TaticTypes.DELETE_ITEM_FAILURE,
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
    takeLatest(TaticTypes.GET_ITEM_REQUEST, getTaticDetailWorker),
    // Create goal
    takeLatest(TaticTypes.CREATE_ITEM_REQUEST, createTaticWorker),
    // Edit goal
    takeLatest(TaticTypes.EDIT_ITEM_REQUEST, editTaticWorker),
    // Delete goal
    takeLatest(TaticTypes.DELETE_ITEM_REQUEST, deleteTaticWorker),
  ])
}

export default watcher
