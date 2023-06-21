import NavBar from "./NavBar";
import Presentacion from "./Presentacion";
import Modal from "./Modal";


const Header = ({modal,setModal}) => {
  return (
    <div id="#inicio" className="w-screen flex-1 border-b-2 border-teal-500" >
      <NavBar 
        modal={modal}
        setModal={setModal}
      />
      <Presentacion />
     
      
   
    </div>
  );
};

export default Header;
