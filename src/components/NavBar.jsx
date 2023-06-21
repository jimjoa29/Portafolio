import Logo from "./Logo";
import Menu from "./Menu";



const NavBar = ({modal, setModal}) => {
  return (
    <div id="inicio" className=" relative mx-10 md:mx-20 flex justify-between pt-4 items-center cursor-pointer fixer  lg:mx-28">     
      <Logo />      
      <Menu 
        modal={modal}
        setModal={setModal}
      />     
     
    </div>
  );
};

export default NavBar;
