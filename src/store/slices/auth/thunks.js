import axios from "axios";
import { onCheking, onLogin } from "./authSlice";
export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(onCheking());
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/veterinarios/login",
        { email, password }
      );
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
      const { data } = await axios.post(
        "http://localhost:4000/api/veterinarios",
        { nombre, email, password }
      );
      console.log(data);

      dispatch(onLogin({ nombre: data.nombre, email: data.email }));
    } catch (error) {
      console.log(error);
    }
  };
};
