import { Link } from 'react-router-dom';
import styles from './HeaderComponent.module.css'; // Importa los estilos

const HeaderComponent = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.left_content}>
          <h1>Título Principal</h1>
          <p>Subtítulo de la página</p>
          <Link to="/history" className={`btn ${styles.btn}`}>Ver más</Link>
       </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
