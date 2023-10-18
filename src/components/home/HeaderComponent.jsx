import { Link } from "react-router-dom";
import styles from "./HeaderComponent.module.css"; // Importa los estilos
import ButtonComponent from "../global/ButtonComponent";

const HeaderComponent = () => {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.hero_content}>
          <div className={styles.left_content}>
            <span className="header_title">Space Defender</span>
            <p className="header_text">
            <b>Space Defender</b> te sumerge en un futuro lejano, donde la humanidad ha expandido su presencia por todo el sistema solar, colonizando la Luna, Marte y estaciones espaciales distantes. A medida que las colonias humanas prosperan, surgen informes inquietantes de avistamientos de fenómenos inexplicables y actividades sospechosas.

            </p>
            <Link to="/history">
              <ButtonComponent title="Ver más"/>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
