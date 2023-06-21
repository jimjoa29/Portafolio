import React from "react";
import Boton from "./Boton";

const SkillsResumen = () => {
  return (
    <div className="py-10  md:w-full md:flex md:flex-col md:justify-center  lg:w-1/2  ">
        <p className="text-white text-2xl text-center  lg:text-start">
        Habilidades {""}
        <span className="text-teal-500">Favoritas</span>
        </p>
        <h2 className="text-teal-500 text-4xl font-bold my-2 uppercase text-center lg:text-start">Mis Habilidades</h2>
        <p className="text-white px-7 pb-4 text-center md:px-32  lg:text-start lg:px-0 lg:mr-10">Estas son mis habilidades y cada una de ellas la pongo a disposición para desarrollar proyectos para ti.</p>

        <div className="text-center pb-7 md:pb-10 lg:text-start">
        <Boton nombre={"Contactame"}/>
        </div>
    </div>


  );
};

export default SkillsResumen;
