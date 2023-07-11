import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
const RutaProtegida = () => {

  const { user } = useSelector((state) => state.auth)
  return (
    <>

      <h1>Es una ruta protegida</h1>
      {user.nombre ? <Outlet /> : <Navigate to='/' />}
      <Outlet />


    </>
  )
}

export default RutaProtegida
