import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetPacients } from "../store/slices/pacients/thunks"
import Paciente from "./Paciente"
const ListadoPacientes = () => {
    const pacientes = useSelector(state => state.pacientes.pacientes)
    console.log(pacientes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startGetPacients())
    }, [])

    return (
        <>
            {pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente key={paciente._id}
                            paciente={paciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comieza administrando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
}

export default ListadoPacientes
