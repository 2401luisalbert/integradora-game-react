
import styles from "./KeyBoardControlsComponent.module.css";

const KeyBoardControlsComponent = () => {
  return (
    <div data-aos="fade-right" className={styles.grid}>
      <h1  className={styles.title}>Controles de teclado</h1>
      <div className={styles.keyboard}>
        <ul className={styles.row}>
          <li></li>
          <li className={`${styles.ring1} ${styles.link}`} id="W">
            W
          </li>
          <li></li>
        </ul>
        <ul className={styles.row}>
          <li className={`${styles.white1} ${styles.link}`} id="A">
            A
          </li>
          <li className={`${styles.ring2} ${styles.link}`} id="S">
            S
          </li>
          <li className={`${styles.middle} ${styles.link}`} id="D">
            D
          </li>
        </ul>
        <ul className={styles.row}>
          <li
            className={`${styles.white2} ${styles.link} ${styles.space}`}
            id="b"
          >
            space
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyBoardControlsComponent;
