const staticCacheName = 'V1-Cache'
const cacheFiles = [
    '/', // Raíz de la aplicación
    '/index.html',
    '/manifest.json',
    '/index.css',
    '/main.jsx',
    '/package.json',
    // Recursos CSS
    '/src/components/global/CardComponent.module.css',
    '/src/components/global/FooterComponent.module.css',
    '/src/components/global/NavbarComponent.module.css',
    '/src/components/Home/HeaderComponent.module.css',
    '/src/views/Home.module.css',
    // Imágenes
    '/src/assets/images/header-home.jpg',
    // Archivos de componentes
    '/src/components/global/CardComponent.jsx',
    '/src/components/global/FooterComponent.jsx',
    '/src/components/global/NavbarComponent.jsx',
    '/src/components/Home/HeaderComponent.jsx',
    // Datos
    '/src/data/data.js',
    // Vistas
    '/src/views/Characters.jsx',
    '/src/views/GameMechanics.jsx',
    '/src/views/History.jsx',
    '/src/views/Home.jsx',
    //rutas
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap'
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
            return cacheRes || fetch(evt.request)
        })
    );
});