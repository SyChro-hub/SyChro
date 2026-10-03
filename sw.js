/*
  SyChro – Collective Systemic Chronography
  © 2025 Serena Treppiedi — All rights reserved.
*/
/* Service worker minimo: serve solo a rendere il sito "installabile" su Android.
   Non salva nulla in cache, quindi gli aggiornamenti del sito sono sempre visibili subito. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* lascia passare tutte le richieste alla rete */ });
