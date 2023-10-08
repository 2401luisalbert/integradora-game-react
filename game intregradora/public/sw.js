const staticCacheName = 'V1-Cache'
const dynamicCache = "site-dynamic-v1"
const cacheFiles = [
    '/', // Raíz de la aplicación
    '/index.html',
    '/manifest.json',
    '/index.css',
    '/main.jsx',
    '/package.json',
    // Imágenes
    '/src/assets/images/header-home.jpg',
    // Datos
    '/src/data/data.js',
    // Vistas
    '/src/views/Characters.jsx',
    '/src/views/GameMechanics.jsx',
    '/src/views/History.jsx',
    '/src/views/Home.jsx',
    //rutas
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap',
    'https://www.youtube.com/embed/nWMKBdf-CGo?si=q_aTYGBHH7rxCWjP',
];


// Install service worker
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('Archivos cacheados');
            return cache.addAll(cacheFiles)
        }).catch(error => {
            console.error('Error en la instalación del Service Worker:', error);
        })
    );
});


//Activate service worker
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== staticCacheName).map(key => caches.delete(key)))
        })
    )
});

//Fetch service worker
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone())
                    return fetchRes
                })
            })
        })
    );
});