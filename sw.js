const CACHE_NAME = 'dairy-dash-v1';

// Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch (Bypass cache agar data selalu update, tapi lolos syarat PWA)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});