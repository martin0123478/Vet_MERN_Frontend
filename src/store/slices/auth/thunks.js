import axios from "axios";
import clienteAxios from "../../../config/axios";
import { onCheking, onLogin,onLogout } from "./authSlice";
import { Navigate, useNavigate } from "react-router-dom";
export const startLogin = ({ email, password }) => {

  return async (dispatch) => {
    dispatch(onCheking());
    try {
      const { data } = await clienteAxios.post("/veterinarios/login", {
        email,
        password,
      });
     
      localStorage.setItem("token", data.token);

      dispatch(onLogin({ user: data.token }));
     history.push('/admin')
     
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

export const checkAuth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const {data} = await clienteAxios("veterinarios/perfil", config);
      dispatch(onLogin({ nombre: data.nombre, email: data.email }));

      console.log(data);
    } catch (error) {
      dispatch(onLogin({}));
      console.log(error);
    }
  };
};

export const checklogOuth= ()=>{
  return (dispatch) =>{
    localStorage.removeItem('token')
    dispatch(onLogout())
  }
}
