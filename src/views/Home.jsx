import CardComponent from "../components/global/CardComponent";
import HeaderComponent from "./../components/home/HeaderComponent";
import { dataHomeWorlds } from "../data/data";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="container mt-5 align-items-center d-flex flex-column">
        <p className={styles.text_world}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          deleniti suscipit quod eum aliquid excepturi, iste rerum aspernatur
          mollitia! Error placeat deleniti debitis impedit illo cupiditate
          voluptatibus recusandae labore nostrum?
        </p>
        <div className={styles.grid_container}>
          {dataHomeWorlds.map((world) => (
            <CardComponent
              img={world.img}
              title={world.title}
              description={world.description}
              id={world.id}
              key={world.id}
            />
          ))}
        </div>
        <p className={styles.text_world}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          deleniti suscipit quod eum aliquid excepturi, iste rerum aspernatur
          mollitia! Error placeat deleniti debitis impedit illo cupiditate
          voluptatibus recusandae labore nostrum?
        </p>
        {/* <div className={styles.iframe_container}>
          <iframe
            src="https://www.youtube.com/embed/nWMKBdf-CGo?si=q_aTYGBHH7rxCWjP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
