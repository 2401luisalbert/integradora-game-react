const n="V1-Cache",t="site-dynamic-v1",c=["/","/index.html","/manifest.json","/index.css","/main.jsx","/package.json","/src/components/global/CardComponent.module.css","/src/components/global/FooterComponent.module.css","/src/components/global/NavbarComponent.module.css","/src/components/Home/HeaderComponent.module.css","/src/views/Home.module.css","/src/assets/images/header-home.jpg","/src/components/global/CardComponent.jsx","/src/components/global/FooterComponent.jsx","/src/components/global/NavbarComponent.jsx","/src/components/Home/HeaderComponent.jsx","/src/data/data.js","/src/views/Characters.jsx","/src/views/GameMechanics.jsx","/src/views/History.jsx","/src/views/Home.jsx","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap"];self.addEventListener("install",e=>{e.waitUntil(caches.open(n).then(s=>(console.log("Archivos cacheados"),s.addAll(c))).catch(s=>{console.error("Error en la instalación del Service Worker:",s)}))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(s=>Promise.all(s.filter(o=>o!==n).map(o=>caches.delete(o)))))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(s=>s||fetch(e.request).then(o=>caches.open(t).then(a=>(a.put(e.request.url,o.clone()),o)))))});
