import clienteAxios from "../config/axios";

export const delNota = async (id) => {
  try {
    const response = await clienteAxios.delete(`/notas/${id}`);
    return response;
  } catch (error) {
    console.erro(error);
  }
};
