import axios from "axios";
import clienteAxios from "../../../config/axios";
import { onCheking, onLogin } from "./authSlice";
export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(onCheking());
    try {
      const { data } = await clienteAxios.post("/veterinarios/login", {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      dispatch(onLogin({ user: data.token }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startRegister = ({ nombre, email, password }) => {
  return async (dispatch) => {
    dispatch(onCheking());
    try {
      const url = "/veterinarios";

      const { data } = await clienteAxios.post(url, {
        nombre,
        email,
        password,
      });
      console.log(data);

      dispatch(onLogin({ nombre: data.nombre, email: data.email }));
    } catch (error) {
      console.log(error);
    }
  };
};
