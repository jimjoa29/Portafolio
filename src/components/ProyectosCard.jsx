const ProyectosCard = ({web, titulo, view, numero, url}) => {
  return (
    <div className="w-9/12">
      <div className="text-white text-center ">
        <a href={url}>
          <img src={`../public/img/card/${numero}.jpg`} alt="" className="w-72 rounded-md hover:-translate-y-2.5 transition-all" />
        </a>
        
        <h2 className="pt-4 text-teal-500">{titulo}</h2>
        <p>{view}</p>
      </div>
    </div>
  );
};

export default ProyectosCard;
