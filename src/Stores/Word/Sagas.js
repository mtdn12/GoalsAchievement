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
import { getToken } from '../Authentication/Selectors'
import { getFilter } from './Selectors'
import { getFirebase } from 'react-redux-firebase'

// Get List word worker
function* getListWordWorker({ filter }) {
  try {
    const token = yield select(getToken)
    const response = yield call(getListWord, token, filter)
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
    const token = yield select(getToken)
    const response = yield call(getWordDetail, token, id)
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
    const firebase = getFirebase()
    // Upload image
    const user = firebase.auth().currentUser
    const path = `${user.uid}/words`
    let name = Date.now()
    const options = {
      name,
    }
    let uploadedFile = yield firebase.uploadFile(
      path,
      values.image,
      null,
      options
    )
    // Get the url of image
    let downLoadURL = yield uploadedFile.uploadTaskSnapshot.ref.getDownloadURL()
    // Update link to value
    const { image, ...wordCreate } = values
    wordCreate.linkMap = downLoadURL
    wordCreate.filePath = path + '/' + name
    const token = yield select(getToken)
    const response = yield call(createWord, token, wordCreate)
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
    const token = yield select(getToken)
    let response
    // Check if image has or not
    if (values.image) {
      const firebase = getFirebase()
      const user = firebase.auth().currentUser
      // Delete old image
      yield firebase.deleteFile(values.filePath)
      // Upload new image
      const path = `${user.uid}/words`
      let name = Date.now()
      const options = {
        name,
      }
      let uploadedFile = yield firebase.uploadFile(
        path,
        values.image,
        null,
        options
      )
      // Get the url of image
      let downLoadURL = yield uploadedFile.uploadTaskSnapshot.ref.getDownloadURL()
      // Update link to value
      // update value filePath and linkMap
      const { image, id, ...wordEdit } = values
      wordEdit.linkMap = downLoadURL
      wordEdit.filePath = path + '/' + name
      // continue
      response = yield call(editWord, token, id, wordEdit)
    } else {
      const { id, ...data } = values
      response = yield call(editWord, token, id, data)
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
    const token = yield select(getToken)
    yield put(ModalActions.showLoadingAction())
    const response = yield call(deleteWord, token, values._id)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    // Delete image in firebase storage
    const firebase = getFirebase()
    // Delete old image
    yield firebase.deleteFile(values.filePath)
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
    const token = yield select(getToken)
    const response = yield call(checkRecall, token, id)
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
export default watcher
