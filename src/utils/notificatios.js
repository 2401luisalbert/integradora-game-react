export const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        return true;
      } else {
        throw new Error("Permiso de notificación denegado");
      }
    } catch (error) {
      throw new Error("Error al solicitar permiso de notificación: " + error.message);
    }
  };
  
  export const showPushNotification = (title, options) => {
    // Agrega las propiedades personalizadas al objeto options
    options.icon = "/src/assets/images/Nick-Parker.webp"; // URL de la imagen del icono
    options.image = "/src/assets/images/Notify.webp"; // URL de una imagen grande
    options.vibrate = [200, 100, 200]; // Patrón de vibración (si el dispositivo lo admite)

    if (Notification.permission === "granted") {
      return new Notification(title, options);
    }
};

  