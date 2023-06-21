
const Formulario = () => {
  return (
    <div className="sm:mx-5 md: mx-10">
        <p className="text-white text-center text-2xl">Puedes <span className="text-teal-500">Contactarme</span></p>
        <h1 className="text-teal-500 text-3xl lg:text-4xl font-bold my-2 uppercase text-center pb-10 ">Formulario de Contacto</h1>

        <form action="https://formsubmit.co/ jimjoa2903@gmail.com " method="POST" className="text-white px-4">
             <div className="flex flex-col  gap-5 lg:flex-row">
                <input 
                    
                    type="text" 
                    name="nombre"
                    placeholder="Ingresa tu Nombre"
                    className="bg-slate-800 bg-transparent border-2 border-teal-500 w-full rounded-md lg:w-60 pl-4 "
                
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Ingresa tu Email" 
                    className="bg-slate-800 bg-transparent border-2 w-full border-teal-500 rounded-md lg:w-60 pl-4 "
                
                />
             </div>
             <div>
             <textarea 
                type="text" 
                name="comentario"
                placeholder="Ingresa tu Comentario aquí"
                className="mt-5 w-full h-40 rounded bg-slate-800 bg-transparent border-2 border-teal-500  pl-4"
             />
             </div>

             <div className="md:text-center lg:text-start">
             <button 
                className="border border-teal-500 bg-transparent hover:bg-teal-600 text-slate-200 px-5 py-2 rounded-md font-semibold my-4"
                type="submit"> Enviar 
                
                
            </button>
             </div>
        </form>

    </div>
  )
}

export default Formulario

 