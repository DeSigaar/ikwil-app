/* eslint-disable no-console */

// Install a service worker
self.addEventListener('install', (__e) => {
  console.log('Service Worker:', 'Install')
  // console.dir(e)
})

// Cache and return requests
self.addEventListener('fetch', (__e) => {
  console.log('Service Worker:', 'Fetch')
  // console.dir(e)
})

// Update a service worker
self.addEventListener('activate', (__e) => {
  console.log('Service Worker:', 'Activate')
  // console.dir(e)
})
