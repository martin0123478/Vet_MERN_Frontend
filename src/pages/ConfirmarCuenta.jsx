import axios from "axios"
import { useEffect, useState } from "react"
import { useParams ,Link} from "react-router-dom"
import Alerta from "../components/Alerta"
const ConfirmarCuenta = () => {
  const [cuentaConfirmada,setCuentaConfirmada] = useState(false)
  const [cargando,setCargando] = useState(true)
  const [alerta,setAlerta] = useState({})
  const params = useParams()
  const {id} = params
  useEffect(()=>{
    const confirmarCuenta = async()=>{
      try {
        const url = `http://localhost:4000/api/veterinarios/confirmar/${id}`
        const {data} = await axios(url)
        setCuentaConfirmada(true)
        setAlerta({msg:data.msg,error:false})
        
      } catch (error) {
        console.log(error)
       setAlerta({msg:error.response.data.msg,error:true})
      }
      setCargando(false)
    }
    confirmarCuenta()
  },[])
    const {msg} = alerta
  return (
    <>
    <div>
    <h1 className='text-indigo-600 font-black text-6xl'>Confirma tu Cuenta y comienza a Administra {} tus <span className='text-black'>Pacientes</span> </h1>
          </div>
    <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
   {msg && <Alerta alerta={alerta}/>}
  {cuentaConfirmada && (
        <Link
        className='block
        text-center my-5 text-slate-500 upercase text-sm'
        to="/"
        >Inicia Sesión
        </Link>
      )} 
    </div>

    </>
  )
}

export default ConfirmarCuenta
