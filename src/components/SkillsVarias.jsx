import React from 'react'

const SkillsVarias = () => {
  return (
    <div className=' p-5  flex justify-center items-start  text-2xl  lg:w-1/2 lg:m-auto'>
        <div className='flex flex-col gap-y-3 '>
            <p className='text-teal-500'><i class="fa-brands fa-html5 text-orange-500"></i> <span className='text-white'>HTML</span></p>   
            <p className='text-teal-500'><i class="fa-brands fa-css3 text-cyan-500"></i> <span className='text-white'>CSS</span></p>
            <p className='text-teal-500'><span className='text-white'>Tailwind</span></p>    
            <p className='text-teal-500'><i class="fa-brands fa-bootstrap"></i> <span className='text-white'>Bootstrap</span></p>              
        </div>
        <div className='flex flex-col gap-y-3'>
            <p className='text-teal-500'><i class="fa-brands fa-js text-yellow-500"></i> <span className='text-white'>JavaScript</span></p>    
            <p className='text-teal-500'><i class="fa-brands fa-react text-3xl"></i> <span className='text-white'>React</span></p>  
            <p className='text-teal-500 bg'><i class="fa-brands fa-github text-black text-3xl"></i> <span className='text-white'>Git & Github</span></p>      
        </div>
    </div>
  )
}

export default SkillsVarias