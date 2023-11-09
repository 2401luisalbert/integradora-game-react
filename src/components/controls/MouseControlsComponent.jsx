import styles from './MouseControlsComponent.module.css'

const MouseControlsComponent = () => {
  return (
    <div className={styles.container}>
      <div data-aos="fade-up" className={styles.grid}>
        <figure className={styles.figure}>
          <img src="/src/assets/images/clic-mouse.webp" alt="mouse" className={styles.img1} />
        </figure>
        <div className={styles.container__text}>
          <p className={styles.text}><b className="text-primary">Clic Izquierdo del Ratón</b> Enfrenta a los enemigos alienígenas y a los robots renegados utilizando el clic izquierdo del ratón para disparar tu arma. Asegúrate de apuntar con precisión para derrotar a tus oponentes y mantener a salvo a Nick.
</p>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.grid}>
        <figure className={styles.figure}>
          <img src='/src/assets/images/mouse-move.webp' alt="mouse" className={styles.img2} />
        </figure>
        <div className={styles.container__text}>
          <p className={styles.text}><b className="text-primary">Movimiento del Ratón </b> Gira el ratón para ajustar la dirección de la cámara y apuntar en la dirección deseada. Esto te permitirá enfocar tus disparos con precisión.</p>
        </div>
      </div>
    </div>
  );
};

export default MouseControlsComponent;
