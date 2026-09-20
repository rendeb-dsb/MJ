const CACHE = 'mj-v31';
self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE).then(c => c.addAll(['./','./index.html','./manifest.json'])).then(() => self.skipWaiting())
));
self.addEventListener('activate', event => event.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(c => c.put('./', copy));
      return response;
    }).catch(() => caches.match('./')));
  } else {
    event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
  }
});
