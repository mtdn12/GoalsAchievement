import { put, call, takeLatest, all } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { AuthActions, AuthTypes } from 'src/Stores/Authentication/Actions'
// import { push } from 'connected-react-router'

import { ModalActions } from '../Modal/Actions'

// Register worker

function* registerWorker(firebase, { values }) {
  try {
    yield put(ModalActions.showLoadingAction())
    let createUser = yield firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
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
    console.log(user)
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
