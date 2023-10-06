import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg bg-body-tertiary">
      <div className="container justify-content-between">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Game
          </Link>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/characters">
                  Personajes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mechanics">
                  Controles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
