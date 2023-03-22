import clienteAxios from "../config/axios";

export const getAll = async () => {
  try {
    const response = await clienteAxios.get("/notas");
    return response;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};
