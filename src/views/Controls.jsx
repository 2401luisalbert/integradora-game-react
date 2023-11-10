import KeyBoardControlsComponent from "../components/controls/KeyBoardControlsComponent";
import styles from "./Controls.module.css";
import MouseControlsComponent from "./../components/controls/MouseControlsComponent";
import ESRBComponent from "../components/global/ESRBComponent";

const Controls = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <KeyBoardControlsComponent />
        </div>
        <div data-aos="fade-right" className={styles.content}>
          <p>
            Teclas <b className="text-primary"> W, A, S y D</b> Utiliza estas teclas para mover a Nick
            Parker por los escenarios de la Luna, Marte y la estación espacial.
            Explora con facilidad mientras buscas pruebas de vida alienígena.
          </p>
          <br />
          <p>
            <b className="text-primary">Barra Espaciadora</b> Utiliza la barra espaciadora para que Nick
            salte en situaciones que lo requieran.
          </p>
        </div>
      </div>
      <h1 className={styles.title}>Controles de Mouse</h1>
      <MouseControlsComponent />
      <ESRBComponent/>
    </>
  );
};

export default Controls;
