import {
  put,
  call,
  all,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects'
import { TodoTypes, TodoActions } from './Actions'
import { NotificationActions } from '../Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import {
  getListTodo,
  getListDailyTodo,
  getListTodoHistory,
  createTodo,
  editTodo,
  deleteTodo,
  checkTodo,
  uncheckTodo,
  createDailyTodo,
  editDailyTodo,
  deleteDailyTodo,
} from 'src/Services/TodoService.js'

import { getHistoryFilter } from './Selectors'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'

// Get List todo worker
function* getListTodoWorker({ filter }) {
  try {
    const response = yield call(getListTodo, filter)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.GET_TODOS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: TodoTypes.GET_TODOS_FAILURE,
    })
  }
}

// Get List daily tod worker
function* getListDailyTodoWorker({ filter }) {
  try {
    const response = yield call(getListDailyTodo, filter)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.GET_DAILY_TODOS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: TodoTypes.GET_DAILY_TODOS_FAILURE,
    })
  }
}

// Get List todo's history worker
function* getListTodoHistoryWorker() {
  try {
    const filter = yield select(getHistoryFilter)
    const response = yield call(getListTodoHistory, filter.toJS())
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.GET_HISTORIES_SUCCESS,
      items: response.data.items,
      totalPages: response.data.totalPages,
    })
  } catch (error) {
    yield put({
      type: TodoTypes.GET_HISTORIES_FAILURE,
    })
  }
}

// Create new todo worker
function* createTodoWorker({ values, callback }) {
  try {
    const { id, ...data } = values
    const response = yield call(createTodo, data)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.CREATE_TODO_SUCCESS,
      item: response.data.item,
    })
    // Call back reset form when create todo sucess
    callback()
    yield put(
      NotificationActions.showNotification(
        'Create todo',
        'Create Todo Success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: TodoTypes.CREATE_TODO_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Create todo', error.message, 'red')
    )
  }
}
// Create new todo worker
function* editTodoWorker({ values, callback }) {
  try {
    const { id, ...data } = values
    const response = yield call(editTodo, id, data)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.EDIT_TODO_SUCCESS,
      item: response.data.item,
    })
    // Call back reset form when edit todo sucess
    callback()
    yield put(
      NotificationActions.showNotification(
        'Edit todo',
        'Edit Todo Success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: TodoTypes.EDIT_TODO_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Edit todo', error.message, 'red')
    )
  }
}

// Delete todo worker
function* deleteTodoWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(deleteTodo, values._id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.DELETE_TODO_SUCCESS,
      item: response.data.item,
    })
    yield put(TodoActions.getTodosRequest())
    yield put(
      NotificationActions.showNotification(
        'Delete todo',
        'Delete Todo Success',
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
      type: TodoTypes.DELETE_TODO_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Delete todo', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}
// Check todo worker
function* checkTodoWorker({ id }) {
  try {
    const response = yield call(checkTodo, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.CHECK_TODO_SUCCESS,
      item: response.data.item,
    })
    yield put(
      NotificationActions.showNotification(
        'Check todo',
        'Check to do success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: TodoTypes.CHECK_TODO_FAILURE,
      id,
    })
    yield put(
      NotificationActions.showNotification('Check todo', error.message, 'red')
    )
  }
}

// Uncheck todo worker
function* uncheckTodoWorker({ id }) {
  try {
    const response = yield call(uncheckTodo, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.UNCHECK_TODO_SUCCESS,
      item: response.data.item,
    })
    yield put(
      NotificationActions.showNotification(
        'Check todo',
        'Check to do success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: TodoTypes.UNCHECK_TODO_FAILURE,
      id,
    })
    yield put(
      NotificationActions.showNotification('Check todo', error.message, 'red')
    )
  }
}
// Create new todo worker
function* createDailyTodoWorker({ values, callback }) {
  try {
    const { id, ...data } = values
    const response = yield call(createDailyTodo, data)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.CREATE_DAILY_TODO_SUCCESS,
      item: response.data.item,
    })
    // Call back reset form when create todo sucess
    callback()
    yield put(
      NotificationActions.showNotification(
        'Create todo',
        'Create Todo Success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: TodoTypes.CREATE_DAILY_TODO_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Create todo', error.message, 'red')
    )
  }
}
// Create new todo worker
function* editDailyTodoWorker({ values, callback }) {
  try {
    const { id, ...data } = values
    const response = yield call(editDailyTodo, id, data)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.EDIT_DAILY_TODO_SUCCESS,
      item: response.data.item,
    })
    // Call back reset form when edit todo sucess
    callback()
    yield put(
      NotificationActions.showNotification(
        'Edit todo',
        'Edit Todo Success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: TodoTypes.EDIT_DAILY_TODO_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Edit todo', error.message, 'red')
    )
  }
}
// Delete todo worker
function* deleteDailyTodoWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(deleteDailyTodo, values._id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: TodoTypes.DELETE_DAILY_TODO_SUCCESS,
      item: response.data.item,
    })
    yield put(TodoActions.getDailyTodosRequest())
    yield put(
      NotificationActions.showNotification(
        'Delete todo',
        'Delete Todo Success',
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
      type: TodoTypes.DELETE_DAILY_TODO_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Delete todo', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

function* watcher() {
  yield all([
    takeLatest(TodoTypes.GET_TODOS_REQUEST, getListTodoWorker),
    takeLatest(TodoTypes.GET_DAILY_TODOS_REQUEST, getListDailyTodoWorker),
    takeLatest(TodoTypes.GET_HISTORIES_REQUEST, getListTodoHistoryWorker),
    takeLatest(TodoTypes.CREATE_TODO_REQUEST, createTodoWorker),
    takeLatest(TodoTypes.EDIT_TODO_REQUEST, editTodoWorker),
    takeLatest(TodoTypes.DELETE_TODO_REQUEST, deleteTodoWorker),
    takeEvery(TodoTypes.CHECK_TODO_REQUEST, checkTodoWorker),
    takeEvery(TodoTypes.UNCHECK_TODO_REQUEST, uncheckTodoWorker),
    takeLatest(TodoTypes.CREATE_DAILY_TODO_REQUEST, createDailyTodoWorker),
    takeLatest(TodoTypes.EDIT_DAILY_TODO_REQUEST, editDailyTodoWorker),
    takeLatest(TodoTypes.DELETE_DAILY_TODO_REQUEST, deleteDailyTodoWorker),
  ])
}

sagaRegistry.register(MODULE_NAME, watcher)
