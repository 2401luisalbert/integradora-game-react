import useAOS from "./../../hook/useAOS";

function ImageHistoryComponent() {
  // eslint-disable-next-line no-unused-vars
  const AOS = useAOS();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      data-aos="flip-down"
      data-aos-duration="2500"
    >
      <img
        src="/src/assets/images/SpaceDefender.webp"
        alt="Space Defender"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

export default ImageHistoryComponent;
