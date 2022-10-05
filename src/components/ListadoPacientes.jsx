//import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => { 
  // elsetPaciente viene del compónente app y se la paso al componente Paciente
  //useEffect(() => {
    //if(pacientes.length > 0) {
      //console.log('NUEVO PACIENTE INGRESADO')
    //}    
  //}, [pacientes]) 
  
  return (
    <div className='md:w-1/2 lg:w-3/5 bg-blue-100 md:h-screen md:overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-center text-lg mt-5 mb-10    '>
            Administra tus {' '} 
            <span className='text-indigo-600 font-bold'>pacientes y citas</span>
          </p>

          { pacientes.map( paciente => (
            //Racibo de Formularios a traves de App.jsx el arreglo pacientes y lo itero y le paso a Paciente.jsx el objeto paciente que suerje de la iteracion
            <Paciente 
              key = {paciente.id}
              paciente={paciente}
              setPaciente={setPaciente} // la tomo de App.jsx (ver en const ListadoPacientes arriba) y se la paso a Paciente.jsx
              eliminarPaciente={eliminarPaciente}
            /> 
            ))
            }
        </>

      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>Todavia no hay pacientes</h2>
          <p className='text-center text-lg mt-5 mb-10    '>
            Comienza a agregar pacientes {' '} 
            <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
          </p>
          </>
      ) }



      


      
    </div>      
  )
}

export default ListadoPacientes