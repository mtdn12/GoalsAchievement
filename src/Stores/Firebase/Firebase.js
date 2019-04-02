import config from '../../Config/firebase'
import app from 'firebase/app'
import { setToken } from '../../Utils/token'
import apiClient from '../../Services'
import 'firebase/auth'
import 'firebase/storage'

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.storageRef = app.storage().ref()

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
  // Upload image
  doUploadImage = (file, path) => {
    let childRef = this.storageRef.child(path)
    return childRef.put(file)
  }
  // Delete file
  doDeleteFile = path => {
    let deleteRef = this.storageRef.child(path)
    return deleteRef.delete()
  }

  onIdTokenListener = () =>
    this.auth.onIdTokenChanged(async auth => {
      let user = this.auth.currentUser
      let token = ''
      if (user) {
        token = await user.getIdToken()
      }
      apiClient.headers.Authorization = token
      setToken(token)
    })
}

let firebase = new Firebase()

export default firebase
