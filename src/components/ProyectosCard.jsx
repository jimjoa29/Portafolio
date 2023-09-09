const ProyectosCard = ({ titulo, view, imagen, url}) => {
  return (
    <div className="w-[95%]">
      <div className="text-white text-center ">
        <a href={url}>
          <img src={imagen} alt="" className="md:w-full lg: w-72 rounded-md hover:-translate-y-1 transition-all hover:border-2  border-teal-500 hover:transition-all "  />
        </a>
        
        <h2 className="pt-4 text-2xl  text-teal-500">{titulo}</h2>
        {/* <p>{view}</p> */}
      </div>
    </div>
  );
};

export default ProyectosCard;
