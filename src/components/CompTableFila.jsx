import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BaseContext from "../context/BaseContext";
import Swal from "sweetalert2";

export const CompTableFila = ({ elemento }) => {
  const { titulo, comentario } = elemento;
  const { actualizarEditar, borrar } = useContext(BaseContext);
  const navigate = useNavigate();

  const handleEditar = (e) => {
    e.preventDefault();
    actualizarEditar(elemento);
    navigate(`/edit/${elemento.id}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `¿ Está seguro de eliminar a: "${titulo}" de los contactos ?`,
      text: "un registro eliminado no se puede recuperar!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar registro",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrar(elemento.id);
      }
    });
  };

  return (
    <tr>
      <td>{titulo}</td>
      <td>{comentario}</td>
      <td>
        <button className="btn btn-outline-dark" onClick={handleEditar}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>{" "}
        <button className="btn btn-outline-dark" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};
