/* ═══════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — Service Worker v5
   Estrategia: network-only para HTML/CSS/JS
   Solo cachea imágenes y datos de medicamentos
═══════════════════════════════════════════════ */

const CACHE_NAME = 'vademecum-enf-v5';

// Solo estos archivos van a caché (raramente cambian)
const CACHE_ONLY = [
  './icono-192.png',
  './icono-512.png',
];

// Instalar: limpiar TODO y cachear solo iconos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => caches.open(CACHE_NAME))
      .then(cache => Promise.allSettled(CACHE_ONLY.map(u => cache.add(u))))
      .then(() => self.skipWaiting())
  );
});

// Activar: limpiar cualquier caché residual y tomar control inmediato
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // HTML, CSS, JS → siempre desde la red (nunca caché)
  const isCore = url.pathname.endsWith('.html') ||
                 url.pathname.endsWith('.css') ||
                 url.pathname.endsWith('.js') ||
                 url.pathname === '/' ||
                 url.pathname === '';

  if (isCore) {
    event.respondWith(fetch(req));
    return;
  }

  // Imágenes → caché con fallback a red
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});
