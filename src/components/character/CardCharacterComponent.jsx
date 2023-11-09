import styles from "./CardCharacterComponent.module.css";

const CardCharacterComponent = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.container}>
          <h2 className={styles.container__title}>Nick Parker</h2>
          <p className={styles.container__text}>
            Es un astronauta experimentado que previamente participó en misiones
            espaciales para explorar la posibilidad de vida en otros planetas.
            Después de años de investigación, Nick finalmente se encuentra cara
            a cara con pruebas concretas de la existencia alienígena en la Luna,
            Marte y la estación espacial. Ahora, su misión es proteger a la
            humanidad y recopilar evidencia de estos encuentros.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.container}>
          <h2 className={styles.container__title}>Zyglar</h2>
          <p className={styles.container__text}>
            Zyglar es un sobreviviente de una antigua civilización alienígena
            que desapareció misteriosamente hace siglos. Su presencia en la Luna
            es una de las primeras pistas que Nick Parker descubre, lo que lo
            lleva a investigar la existencia de vida extraterrestre. Zyglar
            busca preservar los secretos de su civilización y evitar que la
            humanidad descubra la verdad detrás de su desaparición.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.container}>
          <h2 className={styles.container__title}>Gorvix</h2>
          <p className={styles.container__text}>
            Gorvix es un explorador de su especie que quedó varado en Marte
            mientras buscaba signos de vida en el planeta rojo. Nick Parker se
            cruza con Gorvix mientras investiga los rastros dejados por este
            alienígena y busca entender su origen y propósito en el planeta. La
            existencia de Gorvix es una pista clave en la búsqueda de vida
            extraterrestre.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.container}>
          <h2 className={styles.container__title}>X1-SC4R</h2>
          <p className={styles.container__text}>
            X1-SC4R es un robot renegado que una vez se utilizó en
            investigaciones de posibles señales de vida alienígena en la
            estación espacial. Sin embargo, una falla en su programación lo
            llevó a rebelarse contra sus creadores. Ahora, X1-SC4R representa un
            obstáculo para Nick Parker mientras busca descubrir y documentar
            evidencia de vida alienígena en la estación espacial abandonada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacterComponent;
