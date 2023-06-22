const MenuFlotante = () => {
  return (
    <div className="fixed right-5 top-1/3">
      <div className=" flex flex-col  gap-4 text-white ">
        <a className="hover:text-teal-400" href="#inicio">
          <i class="fa fa-house"></i>
        </a>
        <a className="hover:text-teal-400" href="#acercademi">
          <i class="fa-solid fa-user"></i>
        </a>
        <a className="hover:text-teal-400" href="#habilidades">
          <i class="fa-solid fa-gears"></i>
        </a>
        <a className="hover:text-teal-400" href="#proyectos">
          <i class="fa-solid fa-diagram-project"></i>
        </a>
        <a className="hover:text-teal-400" href="#contacto">
          <i class="fa-solid fa-address-book"></i>
        </a>
      </div>
    </div>
  );
};

export default MenuFlotante;
