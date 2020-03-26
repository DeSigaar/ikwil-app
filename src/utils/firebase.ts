import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import * as firebaseui from 'firebaseui'
import configFirebase from 'src/config/firebase'

export const fireApp = firebase.initializeApp(configFirebase)
export const fireAuth = fireApp.auth()
export const fireStore = fireApp.firestore()
export const fireUI = new firebaseui.auth.AuthUI(fireAuth)
