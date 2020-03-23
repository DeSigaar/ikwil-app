import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import * as firebaseui from 'firebaseui'
import configFirebase from '../config/firebase'

export const fireApp = firebase.initializeApp(configFirebase)
export const fireAuth = fireApp.auth()
export const fireStore = fireApp.firestore()
export const fireUI = new firebaseui.auth.AuthUI(fireAuth)

export const firebaseManager = {
  isLoggedIn: (): boolean => fireAuth.currentUser !== null,
  signOut: (): unknown =>
    fireAuth
      .signOut()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Firebase Auth: ', 'Succesfully signed out.')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Firebase Auth: ', error)
      }),
  getCollection: (path: string): unknown => fireStore.collection(path),
}
