import Boton from "./Boton"

const AcercaDeMiResumen = () => {
  return (
    <div className='mg:w-screen text-slate-300 lg:w-1/2 '>

        <h3 className="text-2xl text-center pt-4 lg:text-start">Mi <span className="text-teal-500  ">Intro</span></h3>
        <h2 className="text-teal-500 text-4xl font-bold my-2 uppercase text-center lg:text-start">Acerca de mi</h2>
        <p className="text-slate-300 my-6">
        Soy un apasionado programador web con sólida experiencia en desarrollo de sitios y aplicaciones. Mi enfoque se centra en crear soluciones eficientes y atractivas que cumplan con los objetivos del cliente. Con habilidades en HTML, CSS, JavaScript y frameworks como React, tengo un sólido conocimiento en el desarrollo frontend y backend. Mi capacidad para colaborar en equipos multidisciplinarios y mi habilidad para resolver problemas complejos me han permitido entregar proyectos exitosos. Siempre estoy buscando nuevas oportunidades para aprender y crecer profesionalmente. Mi objetivo es crear experiencias digitales impactantes y funcionales.
        </p>
        
        <div className="text-center lg:text-start">
          <Boton nombre={'Whatsapp'} />
        </div>
    </div>
  )
}

export default AcercaDeMiResumen