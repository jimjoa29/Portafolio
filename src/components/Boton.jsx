import React from 'react'

const Boton = ({nombre}) => {
  return (
    <div className='py-3'>
      <a href='https://wa.link/4sx8is' className="bg-teal-500 hover:bg-teal-600 text-slate-200 px-5 py-2 rounded-md font-semibold my-4">
        {nombre}
    </a>
    </div>
  )
}

export default Boton