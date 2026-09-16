const CACHE = 'mj-v17';
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(['./','./index.html','./manifest.json']))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(r => r || fetch(event.request))));
