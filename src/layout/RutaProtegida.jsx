import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const RutaProtegida = () => {

  const { user } = useSelector((state) => state.auth)
  return (
    <>



      <Header />
      {user.nombre ? <Outlet /> : <Navigate to='/' />}
      <Footer />


    </>
  )
}

export default RutaProtegida
