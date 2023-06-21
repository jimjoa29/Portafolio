
const MenuModal = () => {
  return (
    <ul className=" absolute  text-white text-2xl text-center flex flex-col top-14 w-full h-screen gap-6 ">
         <li className="text-teal-400 hover:text-teal-500"><a href="#inicio">Inicio</a></li>
          <li className='hover:text-teal-500'><a href="#acercademi">Acerca de Mi</a></li>
          <li className='hover:text-teal-500'><a href="#habilidades">Habilidades</a></li>
          <li className='hover:text-teal-500'><a href="#proyectos">Proyectos</a></li>
          <li className='hover:text-teal-500'><a href="#contacto">Contacto</a></li>
    </ul>
  )
}

export default MenuModal