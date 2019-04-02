import { put, call, takeLatest, all } from 'redux-saga/effects'
import { AuthTypes } from 'src/Stores/Authentication/Actions'
import { registerUser } from '../../Services/AuthService'
import { ModalActions } from '../Modal/Actions'
import firebase from '../Firebase/Firebase'
import apiClient from '../../Services'

// Register worker

function* registerWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const authUser = yield firebase.doCreateUserWithEmailAndPassword(
      values.email,
      values.password
    )
    // let token = yield firebase.getCurrentUser().getIdToken(true)
    // setToken(token)
    if (authUser.additionalUserInfo.isNewUser) {
      let user = {
        uid: authUser.user.uid,
        email: values.email,
        name: values.name,
      }
      yield call(registerUser, user)
    }
    yield authUser.user.updateProfile({
      displayname: values.name,
    })
    yield put({
      type: AuthTypes.REGISTER_SUCCESS,
    })
    yield put(ModalActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
    yield put(
      ModalActions.setModal('LoginModal', {
        item: {
          email: values.email,
          password: values.password,
        },
      })
    )
  } catch (error) {
    yield put({
      type: AuthTypes.REGISTER_FAILURE,
    })
    yield put(ModalActions.hideLoadingAction())
  }
}

// Login in with email and password worker
function* loginWorker({ values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    const { user } = yield firebase.doSignInWithEmailAndPassword(
      values.email,
      values.password
    )
    let token = yield firebase.getCurrentUser().getIdToken(true)
    apiClient.headers.Authorization = token
    yield put({
      type: AuthTypes.LOGIN_SUCCESS,
      user,
    })
    yield put(ModalActions.hideLoadingAction())
    yield put(ModalActions.clearModal())
  } catch (error) {
    yield put({
      type: AuthTypes.LOGIN_FAILURE,
    })
    yield put(ModalActions.hideLoadingAction())
  }
}
// Social login worker
function* socialLoginWorker({ provider }) {
  try {
    yield put(ModalActions.clearModal())
    let user
    if (provider === 'google') {
      user = yield firebase.doSignInWithGoogle()
    }
    let token = yield firebase.getCurrentUser().getIdToken(true)
    apiClient.headers.Authorization = token
    if (user.additionalUserInfo.isNewUser) {
      let userSave = {
        uid: user.user.uid,
        email: user.user.email,
        name: user.user.displayName,
      }
      yield call(registerUser, userSave)
    }
    yield put({
      type: AuthTypes.SOCIAL_LOGIN_SUCCESS,
      user,
    })
  } catch (error) {
    yield put({
      type: AuthTypes.SOCIAL_LOGIN_FAILURE,
    })
  }
}

function* watcher() {
  yield all([
    takeLatest(AuthTypes.REGISTER_REQUEST, registerWorker),
    takeLatest(AuthTypes.LOGIN_REQUEST, loginWorker),
    takeLatest(AuthTypes.SOCIAL_LOGIN_REQUEST, socialLoginWorker),
  ])
}

export default watcher
