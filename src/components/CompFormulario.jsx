import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initialForm } from "../context/BaseProvider";
import { CompNavBar } from "./CompNavBar";
import { CompLinea } from "./CompLinea";
import { CompFooter } from "./CompFooter";
import BaseContext from "../context/BaseContext";
import Swal from "sweetalert2";

export const CompFormulario = () => {
  const {
    form,
    actualizarForm,
    agregar,
    actualizar,
    editar,
    actualizarEditar,
  } = useContext(BaseContext);
  const { id, titulo, comentario } = form;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    actualizarForm({
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    actualizarForm(initialForm);
    actualizarEditar(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !comentario) {
      Swal.fire("ERROR", "Todos los datos son obligatorios", "error");
      return;
    } else if (id === null) {
      agregar(form);
    } else {
      actualizar(form);
    }
    handleReset();
    navigate("/");
  };

  return (
    <>
      <CompNavBar />
      <div className="parent">
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="col">
                <div className="card">
                  <div className="card-header bg-curso">
                    {editar ? (
                      <h4 className="card-title text-white">Editar Nota</h4>
                    ) : (
                      <h4 className="card-title text-white">Agregar Nota</h4>
                    )}
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          name="titulo"
                          placeholder="Titulo de la nota"
                          value={titulo}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control mt-2 mb-2"
                          type="text"
                          name="comentario"
                          placeholder="Comentario de la Nota"
                          value={comentario}
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-outline-dark"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <i className="fa-regular fa-circle-check"> AGREGAR</i>
                    </button>
                    {"  "}
                    <button className="btn btn-outline-dark">
                      {" "}
                      <i
                        className="fa-solid fa-ban"
                        onClick={() => handleReset()}
                      >
                        {" "}
                        LIMPIAR
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompLinea />
      <CompFooter />
    </>
  );
};
