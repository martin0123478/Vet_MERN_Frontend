import { useState } from "react"
import Alerta from "./Alerta"
import { useDispatch, useSelector } from 'react-redux'
import { strartRegisterPacient } from "../store/slices/pacients/thunks"
const Formulario = () => {
    const dispatch = useDispatch()
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')

    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState(Date.now())
    const [sintomas, setSintomas] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        dispatch(strartRegisterPacient({ nombre, propietario, email, fecha, sintomas }))
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

        setAlerta({
            msg: 'Guardado correctamente',
            error: false
        })

        setTimeout(() => {
            setAlerta({})
        }, 3000);

    }
    const { msg } = alerta
    return (
        <>
            <p>
                Añade a tus pacientes y {''}
                <span className='text-indigo-600 font-bold'>Adminsitralos</span>
            </p>
            {msg && <Alerta alerta={alerta} />}
            <form className='bg-white py-10 px-5 mt-10 mb-10 lg:mb-10 shadow-md rounded-md'
                onSubmit={handleSubmit}>
                <div className='mb-5 '>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='nombre'>Nombre Mascotas</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='nombre' placeholder='Nombre de la mascota' type="text"
                        value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='email'>Nombre del Propietario</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='email' placeholder='Nombre del Propietario' type="text"
                        value={propietario} onChange={e => setPropietario(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='email'>Email Propietario</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='email' placeholder='Email del Propietario' type="email"
                        value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='fecha'>Fecha alta </label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='fecha' type="date"
                        value={fecha} onChange={e => setFecha(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='sintomas'>Sintomas </label>
                    <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='sintomas' placeholder='Describe los sintomas'
                        value={sintomas} onChange={e => setSintomas(e.target.value)} />
                </div>

                <input className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                hover:bg-indigo-800 cursor-pointer' type='submit' value='Agregar Paciente' />
            </form>

        </>

    )
}

export default Formulario
