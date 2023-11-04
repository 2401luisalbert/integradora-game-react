// eslint-disable-next-line react/prop-types
function InfoHistoryComponent({ imageURL, description, index }) {

  const isImageEmpty = !imageURL;

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center my-5">
        {index % 2 === 0 ? (
          <>
            <div data-aos="fade-right" className={`col-md-4 col-sm-12 d-flex align-items-center justify-content-center ${isImageEmpty ? 'col-md-12' : ''}`}>
              {imageURL && (
                <img
                  className="w-50"
                  src={imageURL}
                  alt={imageURL}
                />
              )}
            </div>
            <div data-aos="fade-right" className={`col-md-${isImageEmpty ? '12' : '8'} col-sm-12`}>
              <p className="mt-2">
                {description}
              </p>
            </div>
          </>
        ) : (
          <>
            <div data-aos="fade-left" className={`col-md-${isImageEmpty ? '12' : '8'} col-sm-12`}>
              <p className="mt-2">
                {description}
              </p>
            </div>
            <div data-aos="fade-left" className={`col-md-4 col-sm-12 d-flex align-items-center justify-content-center ${isImageEmpty ? 'col-md-12' : ''}`}>
              {imageURL && (
                <img
                  className="w-50"
                  src={imageURL}
                  alt={imageURL}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoHistoryComponent;
