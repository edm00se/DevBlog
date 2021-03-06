// advanced config for injectManifest approach
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js');

workbox.setConfig({
  debug: false
});

// enable workbox GA
workbox.googleAnalytics.initialize();

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
  new RegExp('https://www.gravatar.com/avatar/397da8c5ae99b2f89a207d9beda6984d?s=180'),
  new workbox.strategies.CacheFirst()
);
