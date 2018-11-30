import { put, call, takeLatest, all } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { AuthActions, AuthTypes } from 'src/Stores/Authentication/Actions'
import { registerUser } from '../../Services/AuthService'
import { setToken } from '../../Utils/token'

import { ModalActions } from '../Modal/Actions'

// Register worker

function* registerWorker(firebase, { values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    let createUser = yield firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
    let token = yield firebase.auth().currentUser.getIdToken(true)
    setToken(token)
    if (createUser.additionalUserInfo.isNewUser) {
      let userSave = {
        uid: createUser.user.uid,
        email: values.email,
        name: values.name,
      }
      yield call(registerUser, userSave)
    }
    yield createUser.user.updateProfile({
      displayName: values.name,
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
function* loginWorker(firebase, { values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    yield firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
    let token = yield firebase.auth().currentUser.getIdToken(true)
    setToken(token)
    yield put({
      type: AuthTypes.LOGIN_SUCCESS,
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
function* socialLoginWorker(firebase, { provider }) {
  try {
    yield put(ModalActions.clearModal())
    let user = yield firebase.login({
      provider,
      type: 'popup',
    })
    let token = yield firebase.auth().currentUser.getIdToken(true)
    // console.log(token)
    setToken(token)
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
    })
  } catch (error) {
    yield put({
      type: AuthTypes.SOCIAL_LOGIN_FAILURE,
    })
  }
}

function* watcher(getFirebase) {
  const firebase = getFirebase()
  yield all([
    takeLatest(AuthTypes.REGISTER_REQUEST, registerWorker, firebase),
    takeLatest(AuthTypes.LOGIN_REQUEST, loginWorker, firebase),
    takeLatest(AuthTypes.SOCIAL_LOGIN_REQUEST, socialLoginWorker, firebase),
  ])
}

export default watcher
