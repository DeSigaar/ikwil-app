import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import * as firebaseui from 'firebaseui'
import configFirebase from 'src/config/firebase'

export const fireApp = firebase.initializeApp(configFirebase)
export const fireAuth = fireApp.auth()
export const fireStore = fireApp.firestore()
export const fireUI = new firebaseui.auth.AuthUI(fireAuth)

fireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

fireStore.enablePersistence({
  synchronizeTabs: true,
})

export const registerForActivity = (
  status: string,
  activityID: string,
  activityStartDateTime: Date,
): void => {
  const timestamp = firebase.firestore.Timestamp.fromDate(activityStartDateTime)
  const activityRef = `activities/${activityID}`

  fireStore
    .collection('users')
    .doc(fireAuth.currentUser?.uid)
    .collection('registrations')
    .where('activity', '==', activityRef)
    .where('date', '==', timestamp)
    .get()
    .then((_doc) => {
      if (_doc.docs[0]?.data()) {
        // Document/registration exists - Update the document
        fireStore
          .collection('users')
          .doc(fireAuth.currentUser?.uid)
          .collection('registrations')
          .doc(_doc.docs[0].id)
          .update({ status })
      } else {
        // Document/registration does not exist - Create document
        fireStore
          .collection('users')
          .doc(fireAuth.currentUser?.uid)
          .collection('registrations')
          .add({
            date: timestamp,
            activity: activityRef,
            status,
          })
      }
    })
}
