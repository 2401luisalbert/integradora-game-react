// Definir nombres de cachés estáticas y dinámicas
const staticCacheName = 'V1-Cache'; // Nombre de la caché estática
const dynamicCache = "site-dynamic-v1"; // Nombre de la caché dinámica

// Lista de recursos para cachear en la caché estática //
const cacheFiles = [
    '/', // Raíz de la aplicación
    '/index.html', // Página principal
    '/manifest.json', // Archivo de manifiesto para aplicaciones web progresivas
    '/index.css', // Hoja de estilos principal
    '/main.jsx', // Archivo JavaScript principal
    '/package.json', // Archivo de configuración de paquete (para Node.js)
    
    // Imágenes
    '/src/assets/images/Estacion.webp', 
    '/src/assets/images/header.webp',
    '/src/assets/images/Luna.webp',
    '/src/assets/images/Marte.webp',
    '/src/assets/images/Gorvix.webp',
    '/src/assets/images/Nick-Parker.webp',
    '/src/assets/images/SpaceDefender.webp',
    '/src/assets/images/X1-SC4R.webp',
    '/src/assets/images/Zyglar.webp',
    '/src/assets/images/Notify.png',
    
    // Datos
    '/src/data/data.js', // Datos de la aplicación

    //Hooks
    './src/hook/useAOS.js',

    // Vistas
    '/src/views/Characters.jsx', // Vista de personajes
    '/src/views/GameMechanics.jsx', // Vista de mecánicas de juego
    '/src/views/History.jsx', // Vista de historia
    '/src/views/Home.jsx', // Página de inicio

    // Rutas externas (fuentes y videos)
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap', // Fuente externa
    // 'https://www.youtube.com/embed/kfYEiTdsyas?si=vbFcZcWEkzL_r8vk', // Video de YouTube
];

// Instalar el service worker
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('Archivos cacheados'); // Registro: archivos cacheados
            return cache.addAll(cacheFiles); // Agregar recursos a la caché estática
        }).catch(error => {
            console.error('Error en la instalación del Service Worker:', error); // Registro de error en caso de fallo en la instalación
        })
    );
});

// Activar el service worker
self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => key !== staticCacheName).map(key => caches.delete(key)));
        })
    );
});

// Manejar las solicitudes de recursos
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            // Verificar si la solicitud tiene un esquema válido antes de intentar cachearla
            if (evt.request.url.startsWith('http') || evt.request.url.startsWith('https')) {
                return cacheRes || fetch(evt.request).then(async fetchRes => {
                    return caches.open(dynamicCache).then(cache => {
                        cache.put(evt.request.url, fetchRes.clone()); // Almacena la respuesta en la caché dinámica
                        return fetchRes;
                    });
                });
            } else {
                // Si la solicitud tiene un esquema no válido, simplemente devuélvela sin cachear
                return fetch(evt.request);
            }
        })
    );
});
