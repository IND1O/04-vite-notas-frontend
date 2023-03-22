import { useEffect, useState } from "react";
import { delNota } from "../services/delNotas";
import { getAll } from "../services/getAll";
import { postNota } from "../services/postNotas";
import { putNota } from "../services/putNotas";
import BaseContext from "./BaseContext";
import Swal from "sweetalert2";
import { Toast } from "../services/mensaje";

export const initialForm = { id: null, titulo: "", comentario: "" };

const BaseProvider = ({ children }) => {
  const [db, setDb] = useState([]);

  const [buscar, actualizarBuscar] = useState("");

  const [form, actualizarForm] = useState(initialForm);

  const [editar, actualizarEditar] = useState(null);

  const [cargando, setCargando] = useState(false);

  const leerDato = () => {
    setCargando(true);
    getAll().then((res) => {
      //console.log("PETICION GET =>", res.data);
      if (res.status === 200) {
        setDb(res.data);
        setCargando(false);
      } else {
        setDb([]);
        Swal.fire("ERROR", "sin conexión con la base de datos", "error");
      }
    });
  };

  useEffect(() => {
    leerDato();
  }, []);

  useEffect(() => {
    if (editar) {
      actualizarForm(editar);
    } else {
      actualizarForm(initialForm);
    }
  }, [editar]);

  const agregar = () => {
    postNota(form).then((res) => {
      console.log("PETICION POST ==>", res.data);
      if (res.status === 200) {
        //actualizarDb((el) => el.concat(res.data));
        setDb([...db, res.data]);
        Toast.fire({
          icon: "success",
          title: ` "${res.data.message}" `,
        });
        leerDato();
      } else {
        Swal.fire("ERROR", "no se pudo guardar el contacto", "error");
      }
    });
  };

  const actualizar = () => {
    putNota(form).then((res) => {
      //console.log("PETICION PUT ==>", res);
      if (res.statusText === "OK") {
        const respuesta = db.map((elem) => (elem.id === form.id ? form : elem));
        setDb(respuesta);
        Toast.fire({
          icon: "success",
          title: ` "${res.data.message}" `,
        });
      } else {
        Swal.fire("ERROR", "no se pudo actualizar el contacto", "error");
      }
    });
  };

  const borrar = (id) => {
    delNota(id).then((res) => {
      //console.log("PETICION DELETE ==>", res);
      if (res.statusText === "OK") {
        const borrarDato = db.filter((elem) => elem.id !== id);
        setDb(borrarDato);
        Toast.fire({
          icon: "success",
          title: ` "${res.data.message}" `,
        });
      } else {
        Swal.fire("ERROR", "no se pudo eliminar el contacto", "error");
      }
    });
  };

  return (
    <BaseContext.Provider
      value={{
        db,
        buscar,
        form,
        editar,
        actualizarBuscar,
        actualizarForm,
        actualizarEditar,
        agregar,
        actualizar,
        borrar,
        cargando,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseProvider;
