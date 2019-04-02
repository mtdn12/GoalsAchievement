import { put, call, all, takeLatest, select } from 'redux-saga/effects'
import { WordTypes, WordActions } from './Actions'
import { NotificationActions } from '../Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import {
  getListWord,
  editWord,
  createWord,
  deleteWord,
  checkRecall,
  getWordDetail,
} from 'src/Services/WordService.js'
import { getFilter } from './Selectors'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'
import firebase from '../Firebase/Firebase'

// Get List word worker
function* getListWordWorker({ filter }) {
  try {
    const response = yield call(getListWord, filter)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: WordTypes.GET_ITEMS_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: WordTypes.GET_ITEMS_FAILURE,
    })
  }
}

// Get word detail worker
function* getWordDetailWorker({ id }) {
  try {
    const response = yield call(getWordDetail, id)
    if (response.data.result === 'fail') {
      throw new Error(response.error)
    }
    yield put({
      type: WordTypes.GET_ITEM_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: WordTypes.GET_ITEM_FAILURE,
    })
  }
}

// Create book worker
function* createWordWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    // Upload image
    const user = firebase.getCurrentUser()
    let name = Date.now()
    const path = `${user.uid}/words/${name}`
    let uploadedFile = yield firebase.doUploadImage(values.image, path)
    // Get the url of image
    let downLoadURL = yield uploadedFile.ref.getDownloadURL()
    // Update link to value
    const { image, ...wordCreate } = values
    wordCreate.linkMap = downLoadURL
    wordCreate.filePath = path
    const response = yield call(createWord, wordCreate)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: WordTypes.CREATE_ITEM_SUCCESS,
    })
    const filter = yield select(getFilter)
    yield put(WordActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Create word',
        'Create word success',
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
      type: WordTypes.CREATE_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Create word', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

// Edit book worker
function* editWordWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())

    let response
    // Check if image has or not
    if (values.image) {
      const user = firebase.getCurrentUser()
      // Delete old image
      yield firebase.doDeleteFile(values.filePath)
      // Upload new image
      let name = Date.now()
      const path = `${user.uid}/words/${name}`
      let uploadedFile = firebase.doUploadImage(values.image, path)
      // Get the url of image
      let downLoadURL = yield uploadedFile.ref.getDownloadURL()
      // Update link to value
      // update value filePath and linkMap
      const { image, id, ...wordEdit } = values
      wordEdit.linkMap = downLoadURL
      wordEdit.filePath = path
      // continue
      response = yield call(editWord, id, wordEdit)
    } else {
      const { id, ...data } = values
      response = yield call(editWord, id, data)
    }
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: WordTypes.EDIT_ITEM_SUCCESS,
    })
    // Check if current status of list if match with new item create reload list
    const filter = yield select(getFilter)
    yield put(WordActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Edit word',
        'Edit word success',
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
      type: WordTypes.EDIT_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Edit word', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

// Delete word worker
function* deleteWordWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const response = yield call(deleteWord, values._id)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    // Delete image in firebase storage
    // Delete old image
    yield firebase.doDeleteFile(values.filePath)
    yield put({
      type: WordTypes.DELETE_ITEM_SUCCESS,
    })
    const filter = yield select(getFilter)
    yield put(WordActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Delete word',
        'Delete word success',
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
      type: WordTypes.DELETE_ITEM_FAILURE,
    })
    yield put(
      NotificationActions.showNotification('Delete word', error.message, 'red')
    )
    // hide lodaing action
    yield put(ModalActions.hideLoadingAction())
  }
}

// Check word recall
function* checkWordWorker({ id }) {
  try {
    const response = yield call(checkRecall, id)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put({
      type: WordTypes.CHECK_RECALL_SUCCESS,
      id,
    })
    const filter = yield select(getFilter)
    yield put(WordActions.getItemsRequest(filter.toJS()))
    yield put(
      NotificationActions.showNotification(
        'Check word',
        'Check word success',
        'blue'
      )
    )
  } catch (error) {
    yield put({
      type: WordTypes.CHECK_RECALL_FAILURE,
      id,
    })
    yield put(
      NotificationActions.showNotification('check word', error.message, 'red')
    )
  }
}

function* watcher() {
  yield all([
    takeLatest(WordTypes.GET_ITEMS_REQUEST, getListWordWorker),
    takeLatest(WordTypes.GET_ITEM_REQUEST, getWordDetailWorker),
    takeLatest(WordTypes.CREATE_ITEM_REQUEST, createWordWorker),
    takeLatest(WordTypes.EDIT_ITEM_REQUEST, editWordWorker),
    takeLatest(WordTypes.DELETE_ITEM_REQUEST, deleteWordWorker),
    takeLatest(WordTypes.CHECK_RECALL_REQUEST, checkWordWorker),
  ])
}

sagaRegistry.register(MODULE_NAME, watcher)
