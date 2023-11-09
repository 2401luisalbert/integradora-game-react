if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log("Service Worker registered"))
    .catch((err) =>  console.log("Service Worker not registered", err))
}

Notification.requestPermission().then(result => {
    console.log(result);
    if (result === "granted") {

        const options = {
            body: "¡Hola! Bienvenido a tu mejor aventura espacial.",
            icon: "/src/assets/images/Nick-Parker.webp", // URL de la imagen del icono
            image: "/src/assets/images/Notify.webp", // URL de una imagen grande
            vibrate: [200, 100, 200], // Patrón de vibración (si el dispositivo lo admite)
            // requireInteraction: true, // Hace que la notificación sea persistente
        };

        new Notification("Space Defender dice:", options);
    }
});


