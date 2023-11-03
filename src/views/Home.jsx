import CardComponent from "../components/home/CardComponent";
import HeaderComponent from "./../components/home/HeaderComponent";
import { dataHomeWorlds } from "../data/data";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="container mt-5">

        <h2 className="title my-5 py-2">Mundos</h2>
        <div className=" align-items-center d-flex flex-column">

          <p className={styles.text_world}>
            Explora la Luna, Marte y una estación espacial abandonada mientras
            recopilas pistas y muestras de vida alienígena. Encuentra esferas
            bioluminiscentes que brillan en la oscuridad, huevos alienígenas que
            revelan sus estrategias de reproducción y disquetes con datos
            críticos sobre la comunicación de los extraterrestres.
          </p>
          <div className={styles.grid_container}>
            {dataHomeWorlds.map((world) => (
              <CardComponent
                imageURL={world.imageURL}
                title={world.title}
                description={world.description}
                id={world.id}
                key={world.id}
              />
            ))}
          </div>
        </div>

        <h2 className="title my-5 py-2">GamePlay</h2>
        <div className={styles.iframe_container}>
          <iframe
            src="https://www.youtube.com/embed/kfYEiTdsyas?si=vbFcZcWEkzL_r8vk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
