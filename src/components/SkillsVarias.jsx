import TailwindIco from '../../public/img/tailwind-css-svgrepo-com.svg'

const SkillsVarias = () => {
  return (
    <div className=' p-5  flex justify-center items-start text-2xl lg:w-1/2 lg:m-auto'>
        <div className='flex flex-col gap-y-3 mr-8'>
            <p className='text-teal-500'><i class="fa-brands fa-html5 text-orange-500"></i> <span className='text-white sm:text-xl'>HTML</span></p>   
            <p className='text-teal-500'><i class="fa-brands fa-css3 text-cyan-500"></i> <span className='text-white sm:text-xl'>CSS</span></p>
            <p className='text-teal-500'><i class="fa-brands fa-bootstrap text-3xl "></i> <span className='text-white sm:text-xl'>Bootstrap</span></p>              
            <p className='text-teal-500 flex items-center justify-start'><img src={TailwindIco} alt="" className='w-10 mr-2' /><span className='text-white sm:text-xl'>Tailwind</span></p>    
            
        </div>
        <div className='flex flex-col gap-y-3'>
            <p className='text-teal-500'><i class="fa-brands fa-js text-yellow-500"></i> <span className='text-white sm:text-xl'>JavaScript</span></p>    
            <p className='text-teal-500'><i class="fa-brands fa-react text-3xl"></i> <span className='text-white sm:text-xl'>React</span></p>  
            <p className='text-teal-500 bg flex '> <i class="fa-brands fa-git-alt text-4xl text-orange-500 mr-2 "></i><span className='text-white sm:text-xl'>Git</span></p>      
            <p className='text-teal-500 bg flex '><i class="fa-brands fa-github text-black text-4xl mr-2"></i> <span className='text-white sm:text-xl'>Github</span></p>      
           
        </div>
        
    </div>
  )
}

export default SkillsVarias