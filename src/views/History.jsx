import ImageHistoryComponent from "../components/history/ImageHistoryComponent";
import InfoHistoryComponent from "../components/history/InfoHistoryComponent";
import styles from "./History.module.css"; 
import { dataHistory } from "../data/data";

const History = () => {
  return (
    <div className={`container ${styles.historyContainer} `}>
          <h1 className={`text-center text-light mt-5 ${styles.title}`}>Historia</h1>
      <div className={`${styles.gridContainer}`}>
        <div className={styles.infoContainer}>
          {dataHistory.map((data) => (
            <InfoHistoryComponent key={data.id} index={data.id} imageURL={data.imageURL} description={data.description} />
          ))}
        </div>
        <div className={styles.imageContainer}>
          <ImageHistoryComponent />
        </div>
      </div>
    </div>
  );
};

export default History;
