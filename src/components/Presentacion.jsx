import PresentacionFoto from "./PresentacionFoto";
import PresentacionNombre from "./PresentacionNombre";

const Presentacion = () => {
  return (
    <div className=" md:flex md:flex-col text-center mt-10 md:justify-center min-h-screen items-center lg:flex-row lg:text-start lg:m-0  ">
      <PresentacionFoto numero={9} />
      <PresentacionNombre />      
    </div>
  );
};

export default Presentacion;
