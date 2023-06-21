import Boton from "./Boton"

const Footer = () => {
  const date = new Date
  const año =  date.getUTCFullYear()
  return (
    <div className='fondo6 flex-1 w-screen py-5 text-white text-center'>
      
      
      

      <div className="flex flex-row items-center gap-4 py-6 justify-center ">
        <div className="bg-teal-500 hover:bg-teal-600 cursor-pointer w-8 h-8 grid place-content-center rounded-full ">
         <a href="https://github.com/jimjoa29/"><i class="fa-brands fa-github text-white text-xl"></i></a>
        </div>        
        <div className="bg-teal-500 hover:bg-teal-600 cursor-pointer w-8 h-8 grid place-content-center rounded-full ">
          <a href="https://www.linkedin.com/in/joan-alejandro-narvaez-garcia-/"><i class="fa-brands fa-linkedin   text-white text-xl"></i></a>
        </div>
      </div>

      <p>&#169; {`Todos los derechos reservados ${año}`}</p>
    </div>
  )
}

export default Footer