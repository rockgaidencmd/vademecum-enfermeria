/* ═══════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — Service Worker
   MediShort360 Suite · Soporte offline
═══════════════════════════════════════════════ */

const CACHE_NAME = 'vademecum-enf-v4';

// Archivos que se sirven network-first (siempre frescos)
const NETWORK_FIRST = [
  './index.html',
  './',
  './style.css',
  './app.js',
  './disclaimer.js',
];

// Archivos que se cachean (raramente cambian)
const CACHE_FIRST = [
  './manifest.json',
  './icono-192.png',
  './icono-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled([...NETWORK_FIRST, ...CACHE_FIRST].map(url => cache.add(url)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const path = './' + url.pathname.split('/').pop() || './';

  // Network-first para HTML, CSS y JS propios
  const isNetworkFirst = NETWORK_FIRST.some(f => req.url.includes(f.replace('./', '/'))) ||
                         url.pathname === '/' || url.pathname.endsWith('.html');

  if (isNetworkFirst) {
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first para imágenes, iconos y data/
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.status === 200 && url.origin === self.location.origin) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
