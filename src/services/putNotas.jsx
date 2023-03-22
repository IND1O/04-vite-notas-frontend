import clienteAxios from "../config/axios";

export const putNota = async (form) => {
  try {
    const response = await clienteAxios.put(`/notas/${form.id}`, form);
    return response;
  } catch (error) {
    console.error(error);
  }
};
