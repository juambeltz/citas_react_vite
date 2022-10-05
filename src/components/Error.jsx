const Error = ({children}) => { // children es palabra reservada
//const Error = ({mensaje}) => {
    return (
        <div className='bg-red-600 text-white text-center p-3 uppercase mb-3 rounded-md'>
            {children//antes iba mensaje aca
            } 
        </div>
    )
  }
export default Error

