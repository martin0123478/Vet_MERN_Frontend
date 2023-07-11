import React from 'react'

const Formulario = () => {
    return (
        <>
            <p>
                Añade a tus pacientes y {''}
                <span className='text-indigo-600 font-bold'>Adminsitralos</span>
            </p>
            <form className='bg-white py-10 px-5 mt-10 mb-10 lg:mb-10 shadow-md rounded-md'>
                <div className='mb-5 '>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='mascota'>Nombre Mascotas</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='mascota' placeholder='Nombre de la mascota' type="text" />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='email'>Nombre del Propietario</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='email' placeholder='Nombre del Propietario' type="text" />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='email'>Email Propietario</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='email' placeholder='Email del Propietario' type="email" />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='fecha'>Fecha alta </label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='fecha' type="date" />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor='sintomas'>Sintomas </label>
                    <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='sintomas' placeholder='Describe los sintomas' />
                </div>

                <input className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                hover:bg-indigo-800 cursor-pointer' type='submit' value='Agregar Paciente' />
            </form>

        </>

    )
}

export default Formulario
