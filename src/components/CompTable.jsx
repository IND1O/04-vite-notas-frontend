import BaseContext from "../context/BaseContext";
import { useContext } from "react";
import { CompNavBar } from "./CompNavBar";
import { CompTableFila } from "./CompTableFila";
import { CompBotonAgregar } from "./CompBotonAgregar";
import { CompLinea } from "./CompLinea";
import { CompFooter } from "./CompFooter";
import { CompLoader } from "./CompLoader";

export const CompTable = () => {
  const { db, buscar, cargando } = useContext(BaseContext);

  const buscarPorFila = !buscar
    ? db
    : db.filter((dato) =>
        dato.titulo.toLowerCase().includes(buscar.toLowerCase())
      );

  return (
    <>
      <CompNavBar />

      <CompBotonAgregar />

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="col">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="bg-curso text-white">
                    <tr>
                      <th>Titulo</th>
                      <th>Comentario</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buscarPorFila.length > 0 ? (
                      buscarPorFila.map((elemento, index) => (
                        <CompTableFila key={index} elemento={elemento} />
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3}>Sin Datos</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cargando && <CompLoader />}
      <CompLinea />
      <CompFooter />
    </>
  );
};
