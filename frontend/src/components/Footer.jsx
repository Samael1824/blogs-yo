

const Footer = () => {
  return (
    <>
<div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white">
         <p>Blogs</p>
         <p>Mas Visto</p>
         <p>Lectores</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Foro</p>
         <p>Soporte</p>
         <p>Publicaciones recientes</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Politicas de privacidad</p>
         <p>Sobre nosotors</p>
         <p>Terminos y Condiciones</p>
         <p>Terminos de servicio</p>
       </div>
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">Copyright @2023</p>
    </>
    
  )
}

export default Footer