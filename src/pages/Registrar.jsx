import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import { startRegister } from "../store/slices/auth/thunks"
import { useDispatch } from "react-redux"
const Registrar = () => {
  const dispatch = useDispatch()
  const [nombre,setNombre] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword1] = useState('')
  const [password2,setPassword2] = useState('')
  const [alerta,setAlerta] = useState({})

  const handleSubmit = e =>{
    e.preventDefault()
    if([nombre,email,password,password2].includes('')){
      setAlerta({msg:'Hay campos vacios',error:true})
      return
    }
    if(password != password2){
      setAlerta({msg:'No son iguales',error:true})
      return
    }
    if(password.length <6){
        setAlerta({msg:'El password es muy corto, agrega minimo 6 aracteres',error:true})
      return
    }
    setAlerta({})
    dispatch(startRegister({nombre,email,password}))

  }
  const {msg} = alerta
  return (
    <>
 <div>
    <h1 className='text-indigo-600 font-black text-6xl'>Crea tu Cuenta y Administra {} tus <span className='text-black'>Pacientes</span> </h1>
          </div>
    <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
     {msg &&  <Alerta
        alerta={alerta}
      />}
        <form onSubmit={handleSubmit}>
          <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' >Nombre</label>
              <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder='Nombre ' className='w-full border p-3 mt-3 bg-50 rounded-xl' />
              </div>
              <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' >Email</label>
              <input value={email}  onChange={e => setEmail(e.target.value)} type="email" placeholder='Email de registro' className='w-full border p-3 mt-3 bg-50 rounded-xl' />
              </div>
              <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' >Password</label>
              <input value={password} onChange={e => setPassword1(e.target.value)} type="password" placeholder='Password' className='w-full border p-3 mt-3 bg-50 rounded-xl' />
              </div>

              <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' >Repetir Password</label>
              <input value={password2} onChange={e => setPassword2(e.target.value)} type="password" placeholder='Password' className='w-full border p-3 mt-3 bg-50 rounded-xl' />
              </div>
              <input  type="submit" value='iniciar sesión' className='bg-indigo-700 w-full py-3  px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto '/>
        </form>
        

        <nav className='mt-10 lg:flex lg:justify-between'>
              <Link 
              className='block text-center my-5 text-gray-500'
              to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
              <Link
              className='block text-center my-5 text-gray-500'
              to="/olvide-password">Olvide mi password</Link>
            </nav>
              </div>
    </>
  )
}

export default Registrar
