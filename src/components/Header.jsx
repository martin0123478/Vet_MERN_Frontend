import { Link } from 'react-router-dom'
import { checklogOuth } from '../store/slices/auth/thunks'
import { useDispatch } from 'react-redux'
const Header = () => {
    const dispatch = useDispatch()
    return (

        <header className='py-10 bg-indigo-600'>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='font-bold text-2xl text-indigo-200 text-center'>Administrador de paciente de {''}
                    <span className='text-white'>Veterinaria</span>
                </h1>
                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link to='/admin' className='text-white text-sm font-bold'>Perfil</Link>
                    <Link to='/admin' className='text-white text-sm font-bold'>Pacientes</Link>
                    <button type='buton'

                        className='text-white text-sm font-bold' onClick={dispatch(checklogOuth)}>
                        Cerrar Sessión
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
