import ProyectosCard from './ProyectosCard'

const Proyectos = () => {
  return (
   <div id='proyectos' className='fondo4 w-screen px-10 min-h-screen border-b-2 border-teal-500 '>

      <h1 className="text-teal-500 text-4xl font-bold my-2 uppercase text-center pt-10">Mis Proyectos</h1>
      <p className="text-white text-base font-bold my-2 text-center ">Web Profesionales</p>
       <div className= 'py-16 grid  md:grid-cols-2 md:py-10 lg:grid-cols-3 gap-5 place-items-center '>
        
        
        <ProyectosCard 
          url='#'           
          titulo='Moderna Website Guitarras' 
          view='View demo' 
          numero='001' 
        />

        <ProyectosCard 
          url='#'            
          titulo='Moderna WebSite Veterinaría' 
          view='View demo' 
          numero='002' 
        />

        <ProyectosCard 
          url='#'            
          titulo='Modern Website Paisajes' 
          view='View demo' 
          numero='003' 
        />

        <ProyectosCard 
          url='#'            
          titulo='Moderns Website Motos' 
          view='View demo' 
          numero='004' 
        />

        <ProyectosCard 
          url='#'
           
          titulo='Modern Website Fotografia' 
          view='View demo' 
          numero='005' 
        />

        <ProyectosCard 
          url='#'            
          titulo='Moderna Website Trading' 
          view='View demo' 
          numero='006' 
        />
    </div>
   </div>
  )
}

export default Proyectos