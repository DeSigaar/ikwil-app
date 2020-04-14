/* eslint-disable no-console */
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAFtXOSXoFHgOB9FMOkdrFeJdTEvyGmm6U',
  appId: '1:35006139161:web:58dd44278ec0fbf7619388',
  authDomain: 'stichting-ik-wil.firebaseapp.com',
  databaseURL: 'https://stichting-ik-wil.firebaseio.com',
  measurementId: 'G-081XKE41V4',
  messagingSenderId: '35006139161',
  projectId: 'stichting-ik-wil',
  storageBucket: 'stichting-ik-wil.appspot.com',
})

const fireMessaging = firebase.messaging()

fireMessaging.setBackgroundMessageHandler((payload) =>
  self.registration.showNotification(payload.data.title, {
    ...payload.data,
  }),
)
