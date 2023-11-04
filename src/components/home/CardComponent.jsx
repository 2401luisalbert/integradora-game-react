import styles from './CardComponent.module.css';

// eslint-disable-next-line react/prop-types
const CardComponent = ({ title, description, imageURL }) => {
  return (
    <div className={styles.card} data-aos="slide-up">
      <div className={styles.cardImage}>
        <img src={imageURL} alt={title} />
      </div>
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
