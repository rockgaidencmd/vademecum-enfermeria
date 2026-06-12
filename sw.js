/* ═══════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — Service Worker
   MediShort360 Suite · Soporte offline
═══════════════════════════════════════════════ */

const CACHE_NAME = 'vademecum-enf-v2';

// Rutas relativas (compatible con GitHub Pages en subcarpeta)
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './disclaimer.js',
  './manifest.json',
  './icono-192.png',
  './icono-512.png',
  './data/noradrenalina.js',
  './data/vancomicina.js',
  './data/insulina-regular.js',
  './data/cloruro-potasio.js',
  './data/meropenem.js'
];

// Instalar: precachear lo esencial (sin romper si algún archivo falta)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(ASSETS.map(url => cache.add(url)))
    ).then(() => self.skipWaiting())
  );
});

// Activar: limpiar caches viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first para assets propios, red para el resto
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Las fuentes de Google se intentan por red y se cachean si funcionan
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        // Cachear respuestas válidas del mismo origen
        if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
