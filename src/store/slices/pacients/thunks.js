import clienteAxios from "../../../config/axios";
import { addPacient,getPacients } from "./pacientesSlice";

export const strartRegisterPacient = (d) =>{
    return async(dispatch) =>{
        try {
            const token = localStorage.getItem("token");
    if (!token) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

            const {data} = await clienteAxios.post('/pacientes',d,config)
            console.log(data)
            dispatch(addPacient(data))
         } catch (error) {
            console.log(error)
            
        }
    }
}

export const startGetPacients = () =>{
    return async (dispatch) =>{
        try {
        const token = localStorage.getItem("token");
    if (!token) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
     
    }; 
        const {data} = await clienteAxios('/pacientes',config)
        console.log(data)
      dispatch(getPacients(data))
        } catch (error) {
            
        }
    }
}