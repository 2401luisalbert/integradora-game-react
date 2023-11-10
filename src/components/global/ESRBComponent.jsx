import styles from "./ESRBComponent.module.css";

const ESRBComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.esrb_rating}>
        <div>Everyone 10+</div>
        <div>
          <div>E</div>
        </div>
        <div>esrb</div>
        <div>10+</div>
      </div>
    </div>
  );
};

export default ESRBComponent;
