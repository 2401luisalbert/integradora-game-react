
import PropTypes from 'prop-types'; // Importa PropTypes si aún no lo has hecho
import styles from './CardComponent.module.css';

const CardComponent = (props) => {
  const { img, title, description} = props;

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt="image" className={styles.cardImg} />
      </div>
      <div className={styles.cardText}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

// Agrega la validación de PropTypes si es necesario
CardComponent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardComponent;
