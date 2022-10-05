function Header(){
//function Header({tomaValor }){
//function Header({tomaValor }){

//function Header({numeros, isAdmin, fn}){
    
    // aca puedo poner props que es palabra reservada o hacer deconstructing con todos los props que meti en App.jsx dentro del componente <Header />

    // console.log(props) si pngo esto me muestrta el objeto con sus variables y valores

    //console.log(numeros)
    //console.log(isAdmin)
    //fn()
    
    //const variableHeader = true;

    //tomaValor(variableHeader)

    return (
        
        <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto bg-gray-200 p-3'>Seguimiento Pacientes {''}
        <span className='text-indigo-700 d'>Veterinaria Johny</span></h1>
        
    )
}
export default Header;