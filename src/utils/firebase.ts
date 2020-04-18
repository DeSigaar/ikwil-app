import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/messaging'
import * as firebaseui from 'firebaseui'
import { toast } from 'react-toastify'
import configFirebase from 'src/config/firebase'

export const fireApp = firebase.initializeApp(configFirebase)
export const fireAuth = fireApp.auth()
export const fireStore = fireApp.firestore()
export let fireMessaging: firebase.messaging.Messaging | null = null
export const fireUI = new firebaseui.auth.AuthUI(fireAuth)

fireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

fireStore.enablePersistence({
  synchronizeTabs: true,
})

if (firebase.messaging.isSupported()) {
  fireMessaging = fireApp.messaging()
  fireMessaging.usePublicVapidKey(
    'BN5JqDZcWF57aasLq1kCuzB8Ug80Nkz1H6XoZ2rFu3it6F1wPmvMOwxA_YGOsrEYRAlClVevc57jQd7O5ARuQ6M',
  )

  fireMessaging.onMessage((payload) =>
    toast(`${payload.data.title}: ${payload.data.body}`),
  )
}
