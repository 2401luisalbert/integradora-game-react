import { Link } from 'react-router-dom';
import styles from './HeaderComponent.module.css'; // Importa los estilos

const HeaderComponent = () => {
  return (
    <>
    <header className={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.left_content}>
          <h1>Título Principal</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus, voluptatem harum doloremque vel et aperiam perferendis, voluptates optio tempore sit molestias adipisci eligendi neque architecto quasi quo nihil repudiandae.</p>
          <Link to="/history" className={`btn ${styles.btn}`}>Ver más</Link>
       </div>
      </div>
    </header>
   
    </>
  );
}

export default HeaderComponent;
