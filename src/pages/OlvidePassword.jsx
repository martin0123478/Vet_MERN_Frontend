import { Link } from "react-router-dom"
const OlvidePassword = () => {
  return (
    <>
    <div>
    <h1 className='text-indigo-600 font-black text-6xl'>Recupera tu Cuenta y Administra {} tus <span className='text-black'>Pacientes</span> </h1>
          </div>
    <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
        <form>
          <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' >Email</label>
              <input type="email" placeholder='Nombre ' className='w-full border p-3 mt-3 bg-50 rounded-xl' />
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
