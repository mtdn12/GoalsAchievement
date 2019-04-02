import config from '../../Config/firebase'
import app from 'firebase/app'
import { setToken } from '../../Utils/token'
import apiClient from '../../Services'
import 'firebase/auth'

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    this.emailAuthProvider = app.auth.EmailAuthProvider
  }
  getCurrentUser = () => this.auth.currentUser
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

  dosSignInWithFaceBook = () => this.auth.signInWithPopup(this.facebookProvider)

  doSignOut = () => this.auth.signOut()

  onIdTokenListener = () =>
    this.auth.onIdTokenChanged(async auth => {
      let user = this.auth.currentUser
      let token = ''
      if (user) {
        token = await user.getIdToken()
      }
      setToken(token)
      apiClient.headers.Authorization = token
    })
}

let firebase = new Firebase()

export default firebase
