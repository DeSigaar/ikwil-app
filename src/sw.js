/* eslint-disable */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
)

self.addEventListener('install', (e) => {
  console.log('Service Worker: Install', e)
})

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activate', e)
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetch', e)
})

self.addEventListener('sync', (e) => {
  console.log('Service Worker: Sync', e)
})

self.addEventListener('push', (e) => {
  console.log('Service Worker: Push', e)
})

workbox.core.clientsClaim()

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {})

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('./index.html'),
  {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
  },
)
