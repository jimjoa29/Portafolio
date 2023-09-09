import Boton from "./Boton";

const PresentacionNombre = () => {
  return (
    <div className=" lg:w-1/2  mx-3">
      <p className=" text-slate-300 text-2xl mt-6">
        Hola,{""}
        <span className="text-teal-500 "> Soy</span>
      </p>
      <h1 className=" text-3xl md:text-5xl uppercase font-bold text-teal-500 py-4 lg:text-5xl">Joan <span className="text-slale-300">Narvaez</span></h1>
      <h2 className="text-2xl text-slate-300 pb-4">Front-end Developer</h2>
      <p className=" text-slate-300 mx-8  pb-4 text-base md:mx-20 lg:ml-0 lg:mr-32"> 
        Con conocimiento en desarrollo y diseño web, ofrezco el mejor proyecto
        que resulte en un trabajo de calidad
      </p>

      <Boton nombre={'Contactame'} />

      <div className="flex flex-row justify-center items-center gap-4 py-6 lg:justify-start ">
        <div className="bg-teal-500 hover:bg-teal-600 cursor-pointer w-8 h-8 grid place-content-center rounded-full ">
        <a href="https://github.com/jimjoa29/"><i class="fa-brands fa-github text-white text-xl"></i></a>
        </div>        
        <div className="bg-teal-500 hover:bg-teal-600 cursor-pointer w-8 h-8 grid place-content-center rounded-full ">
          <a href="https://www.linkedin.com/in/joan-alejandro-narvaez-garcia-/"><i class="fa-brands fa-linkedin   text-white text-xl"></i></a>
        </div>
      </div>


    </div>
  );
};

export default PresentacionNombre;

<div className="flex flex-row items-center gap-4 py-6 justify-center ">
        <div className="bg-teal-500 hover:bg-teal-600 cursor-pointer w-8 h-8 grid place-content-center rounded-full ">
         <a href="https://github.com/jimjoa29/"><i class="fa-brands fa-github text-white text-xl"></i></a>
        </div>        
        <div className="bg-teal-500 hover:bg-teal-600 cursor-pointer w-8 h-8 grid place-content-center rounded-full ">
          <a href="https://www.linkedin.com/in/joan-alejandro-narvaez-garcia-/"><i class="fa-brands fa-linkedin   text-white text-xl"></i></a>
        </div>
      </div>