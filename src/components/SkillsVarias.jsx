import React from 'react'

const SkillsVarias = () => {
  return (
    <div className=' p-5  flex justify-center items-start  text-2xl  lg:w-1/2 lg:m-auto'>
        <div className='flex flex-col gap-y-3 mr-4'>
            <p className='text-teal-500'><i class="fa-brands fa-html5 text-orange-500"></i> <span className='text-white'>HTML</span></p>   
            <p className='text-teal-500'><i class="fa-brands fa-css3 text-cyan-500"></i> <span className='text-white'>CSS</span></p>
            <p className='text-teal-500'><i class="fa-brands fa-bootstrap text-3xl"></i> <span className='text-white'>Bootstrap</span></p>              
            <p className='text-teal-500'><span className='text-white'>Tailwind</span></p>    
        </div>
        <div className='flex flex-col gap-y-3'>
            <p className='text-teal-500'><i class="fa-brands fa-js text-yellow-500"></i> <span className='text-white'>JavaScript</span></p>    
            <p className='text-teal-500'><i class="fa-brands fa-react text-3xl"></i> <span className='text-white'>React</span></p>  
            <p className='text-teal-500 bg flex '> <i class="fa-brands fa-git-alt text-4xl text-orange-500 mr-2 "></i><span className='text-white'>Git</span></p>      
            <p className='text-teal-500 bg flex '><i class="fa-brands fa-github text-black text-4xl mr-2"></i> <span className='text-white'>Github</span></p>      
        </div>
    </div>
  )
}

export default SkillsVarias