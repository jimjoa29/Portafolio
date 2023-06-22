import btnWhatsapp from '../../public/img/btn-whatsapp.png'

const BotonWhatsapp = () => {
  return (
    <div>
        {/* Boton de Whatsapp */}
        <a href="https://wa.link/4sx8is"><img src={btnWhatsapp} alt="logo-whatsapp" 
        className='fixed bottom-5 right-5 w-12 fixer'/></a>
    </div>
  )
}

export default BotonWhatsapp