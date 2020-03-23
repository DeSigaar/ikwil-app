/* eslint-disable no-console */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import * as firebaseui from 'firebaseui'

export const fireApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_firebase_apiKey,
  appId: process.env.REACT_APP_firebase_appId,
  authDomain: process.env.REACT_APP_firebase_authDomain,
  databaseURL: process.env.REACT_APP_firebase_databaseURL,
  measurementId: process.env.REACT_APP_firebase_measurementId,
  messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
  projectId: process.env.REACT_APP_firebase_projectId,
  storageBucket: process.env.REACT_APP_firebase_storageBucket,
})
export const fireAuth = fireApp.auth()
export const fireStore = fireApp.firestore()
export const fireUI = new firebaseui.auth.AuthUI(fireAuth)

export const firebaseManager = {
  getStore: (path: string): unknown => fireStore.collection(path),
  isLoggedIn: (): boolean => fireAuth.currentUser !== null,
  signOut: (): unknown =>
    fireAuth
      .signOut()
      .then(() => console.log('Firebase Auth: ', 'Succesfully signed out.'))
      .catch(error => console.error('Firebase Auth: ', error)),
}
