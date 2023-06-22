import { useState } from "react";
import Header from "./components/Header";
import AcercaDeMi from "./components/AcercaDeMi";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import MenuFlotante from "./components/MenuFlotante";
import BotonWhatsapp from "./components/BotonWhatsapp";
import Modal from "./components/Modal";
import "./index.css";


function App() {
  
  const [modal, setModal] = useState(false);

  
  return (
    <div className="fondo flex flex-col relative">  
      <Header 
        modal={modal}
        setModal={setModal}
      />
      <AcercaDeMi />
      <Skills />
      <Proyectos />
      <Contacto />
      <Footer />
    

      <BotonWhatsapp />

      <MenuFlotante />

      {modal && 
      <Modal 
        setModal={setModal}        
      />}
      
    </div>
  );
}

export default App;
