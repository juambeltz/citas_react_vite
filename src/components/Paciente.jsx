const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta  = confirm('Desea eliminar el paciente?')
    //console.log('eliminando...' , id)
    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className='py-10 px-5 shadow-md bg-white rounded-xl mb-5 mx-2 md:mx-0'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre de Mascota: {' '}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre de Propietario: {' '}
          <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
          <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha de Alta: {' '}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {' '}
          <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg" 
            onClick={() => setPaciente(paciente) }
            >Editar
          </button>
          
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg"
            onClick={handleEliminar}           
            
            >Eliminar
          </button>
        </div>  
    </div>
  )
}

export default Paciente