
import AcercaDeMiResumen from "./AcercaDeMiResumen"
import PresentacionFotoAcercaDeMi from "./PresentacionFotoAcercaDeMi"

const AcercaDeMi = () => {
  return (
    <div id="acercademi" className="fondo2 border-b-2 border-teal-5009i.za< N,.-;M min-h-screen w-screen px-10 py-10 md:flex md:px-20 flex-col justify-between items-center lg:flex-row">
       
          <PresentacionFotoAcercaDeMi numero={6} />      
          <AcercaDeMiResumen />
       
    </div>
  )
}

export default AcercaDeMi