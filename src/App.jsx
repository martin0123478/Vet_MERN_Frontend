import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import NuevoPassword from './pages/NuevoPassword'
import RutaProtegida from './layout/RutaProtegida'
import AdministradorPacientes from './pages/AdministradorPacientes'
import { useSelector } from 'react-redux'

function App() {



  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='registrar' element={<Registrar />} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='olvide-password/:token' element={<NuevoPassword />} />
          <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
        </Route>

        <Route path="/admin" element={<RutaProtegida />}>
          <Route index element={<AdministradorPacientes />} />
        </Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
