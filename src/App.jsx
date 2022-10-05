
import { useState, useEffect } from "react" // para crear states
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([]) // creo state, valor inicial un array vacio
  const [paciente, setPaciente] = useState({}) // valor inicial un objeto vacio 

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        //console.log(pacientesLS)
        setPacientes(pacientesLS);
    }
    obtenerLS();
  }, [] )

  useEffect(() => {
    localStorage.setItem('pacientes' , JSON.stringify(pacientes));
  }, [pacientes] )

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
    //console.log('elimina paciente',  id)
    setPacientes(pacientesActualizados)
  }
  

  return (
    
    <div className="container mx-auto mt-20">
      <Header
        //numeros={ 1 }
        //isAdmin={false}
        //fn={imprime2mas2}

        //tomaValor={tomaValor}  aca conviene que el prop se llame igual a la varable o funcion que es us valor
      />

      <div className='mt-12 md:flex gap-5'>
        <Formulario
          pacientes={pacientes} 
          setPacientes={setPacientes}//aca conviene que el prop se llame igual a la varable o funcion que es us valor
          paciente={paciente}//Le pasa a formulario el objeto paciente que previamente obtuvo
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPaciente={setPaciente}// aca se la pasa solo para que el ListadoPaciente.jsx se la termine pasando a Paciente.jsx mediante los props. 
          eliminarPaciente={eliminarPaciente}
  
        />
      </div>
    </div>
    
  )
}

export default App
