/* ═══════════════════════════════════════════════
   VADEMÉCUM ENFERMERÍA — Service Worker v8
   Limpia todo el caché, se desregistra y deja
   que el navegador cargue siempre desde red.
═══════════════════════════════════════════════ */

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(c => c.navigate(c.url)))
  );
});
