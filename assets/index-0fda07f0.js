"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(e=>console.log("Service Worker registered")).catch(e=>console.log("Service Worker not registered",e));
