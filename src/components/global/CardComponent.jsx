import styles from './CardComponent.module.css';

const CardComponent = (props) => {
  // eslint-disable-next-line react/prop-types
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



export default CardComponent;
