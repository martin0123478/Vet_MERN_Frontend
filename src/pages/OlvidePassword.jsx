import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"
const OlvidePassword = () => {
  const [email,setEmail] = useState('')
  const [alerta,setAlerta] = useState({})
  const handelSubmit= async e=>{
    e.preventDefault()
    if(email ===''){
      setAlerta({msg:'El email es obligatorio',error:true})
      return
    }
    try {
      const {data} = await clienteAxios.post('/veterinarios/olvide-password',{email})
      console.log(data)
      setAlerta({msg:data.msg})
    } catch (error) {
      setAlerta({msg:error.response.data.msg,error:true})
    }
  }
  const {msg} = alerta
  return (
    <>
    <div>
    <h1 className='text-indigo-600 font-black text-6xl'>Recupera tu Cuenta y Administra {} tus <span className='text-black'>Pacientes</span> </h1>
          </div>
    <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
       {msg &&  <Alerta
        alerta={alerta}
      />}
        <form onSubmit={handelSubmit}>
          <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' >Email</label>
              <input value={email} type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} className='w-full border p-3 mt-3 bg-50 rounded-xl' />
              </div>
          <input type="submit" value='Enviar Instrucciones' className='bg-indigo-700 w-full py-3  px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto '/>
        </form>
          <nav className='mt-10 lg:flex lg:justify-between'>
              <Link 
              className='block text-center my-5 text-gray-500'
              to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
              <Link 
              className='block text-center my-5 text-gray-500'
              to="/registrar">No tienes una cuenta? Registrate</Link>
            </nav>
      </div>
    </>
  )
}

export default OlvidePassword
