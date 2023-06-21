import Modal from "./Modal"

const Menu = ({ setModal}) => {

  const handleActivarBar = () => {      
    setModal(true)
    console.log('click a bar')
  }

  return (
    <>
      <ul className='hidden lg:flex justify-center align-center  lg:gap-4 text-base text-white '>
          <li className="text-teal-400 hover:text-teal-500"><a href="#inicio">Inicio</a></li>
          <li className='hover:text-teal-500'><a href="#acercademi">Acerca de Mi</a></li>
          <li className='hover:text-teal-500'><a href="#habilidades">Habilidades</a></li>
          <li className='hover:text-teal-500'><a href="#proyectos">Proyectos</a></li>
          <li className='hover:text-teal-500'><a href="#contacto">Contacto</a></li>
          
      </ul> 
      <div className='lg:hidden cursor-pointer'>
        <p id='btnBar' className='text-teal-500 hover:text-teal-500 text-3xl '>
          <i class="fa fa-bars"
          onClick={handleActivarBar}
          >

          </i>
        </p>
      </div>
      
      
    </>
  )
}

export default Menu