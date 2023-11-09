import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand text-light">
          Space Defender
        </NavLink>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-light">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/history" className="nav-link text-light">
                Historia
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/characters" className="nav-link text-light">
                Personajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mechanics" className="nav-link text-light">
                Controles
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
