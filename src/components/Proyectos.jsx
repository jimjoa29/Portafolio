import ProyectosCard from './ProyectosCard'
import imagen01 from '../../public/img/card/001.jpg'
import imagen02 from '../../public/img/card/002.jpg'
import imagen03 from '../../public/img/card/003.jpg'
import imagen04 from '../../public/img/card/004.jpg'
import imagen05 from '../../public/img/card/005.jpg'
import imagen06 from '../../public/img/card/006.jpg'

const Proyectos = () => {
  return (
   <div id='proyectos' className='fondo4 w-screen px-10 min-h-screen border-b-2 border-teal-500 '>

      <h1 className="text-teal-500 text-4xl font-bold my-2 uppercase text-center pt-10">Mis Proyectos</h1>
      <p className="text-white text-base font-bold my-2 text-center ">Web Profesionales</p>
       <div className= 'py-16 grid  md:grid-cols-2 md:py-10 lg:grid-cols-3 gap-5 place-items-center '>
        
        
        <ProyectosCard 
          url='#'           
          titulo='Musica' 
          view='View demo' 
          imagen={imagen01} 
        />

        <ProyectosCard 
          url='#'            
          titulo='Veterinaría' 
          view='View demo' 
          imagen={imagen02} 
        />

        <ProyectosCard 
          url='#'            
          titulo='Paisajes' 
          view='View demo' 
          imagen={imagen03}
        />

        <ProyectosCard 
          url='#'            
          titulo='Motos' 
          view='View demo' 
          imagen={imagen04}
        />

        <ProyectosCard 
          url='#'
           
          titulo='Fotografia' 
          view='View demo' 
          imagen={imagen05} 
        />

        <ProyectosCard 
          url='#'            
          titulo='Trading' 
          view='View demo' 
          imagen={imagen06}
        />
    </div>
   </div>
  )
}

export default Proyectos