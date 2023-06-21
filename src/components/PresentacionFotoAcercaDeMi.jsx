const PresentacionFotoAcercaDeMi = ({numero}) => {
  return (
    <div className="lg:w-1/3 flex justify-center ">
        <div className="w-80">
          
          <img src={`/img/${numero}.png`} alt="foto" className="w-80 border-2 rounded-xl border-teal-500" />
        </div>
    </div>
  )
}

export default PresentacionFotoAcercaDeMi