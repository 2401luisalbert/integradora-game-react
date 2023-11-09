import CardCharacterComponent from "../components/character/CardCharacterComponent";
import CardItemsComponent from "../components/character/CardItemsComponent";
import { Items } from "./../data/data";
console.log("Items", Items);

const Characters = () => {
  return (
    <div className="container pb-5">
      <p  data-aos="fade-right" className="mt-5">
        En <b className="text-primary fs-5">Space Defender</b> te adentrarás en
        un emocionante viaje a través del espacio mientras asumes el papel del
        famoso astronauta defensor, Nick Parker. Pero eso no es todo; también te
        enfrentarás a enemigos alienígenas y robots renegados únicos en cada
        escenario.
      </p>
      <h2  data-aos="fade-right" className="text-white my-5">Personajes </h2>

      <CardCharacterComponent />

      <h2  data-aos="fade-right"className="text-white my-5">Items </h2>
      
      <div className="d-flex flex-wrap justify-content-center">
        {Items.map((item) => (
          <CardItemsComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
