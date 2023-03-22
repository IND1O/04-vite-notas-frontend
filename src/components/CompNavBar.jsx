import { useContext } from "react";
import BaseContext from "../context/BaseContext";
import { Link } from "react-router-dom";

export const CompNavBar = () => {
  const { buscar, actualizarBuscar } = useContext(BaseContext);

  const handleChange = (e) => {
    actualizarBuscar(e.target.value);
  };

  return (
    <div>
      <nav className="navbar bg-curso mb-4">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand text-white">
            <i className="fa-solid fa-house"> INICIO</i>
          </Link>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar por titulo"
              aria-label="Search"
              value={buscar}
              onChange={handleChange}
            />
            <button className="btn btn-outline-dark" type="submit">
              <i className="fa-brands fa-searchengin"></i>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
