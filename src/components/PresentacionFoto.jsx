import React from 'react'

const PresentacionFoto = ({numero}) => {
  return (
    <div className="lg:w-1/3 flex justify-center  ">
        <div className="">
          
          <img src={`/img/${numero}.png`} alt="foto" className="w-80  " />
        </div>
    </div>
  )
}

export default PresentacionFoto