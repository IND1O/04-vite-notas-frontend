import clienteAxios from "../config/axios";

export const postNota = async (form) => {
  try {
    const response = await clienteAxios.post("/notas", form);
    return response;
  } catch (error) {
    console.error(error);
  }
};
