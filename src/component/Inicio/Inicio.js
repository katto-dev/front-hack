import './Inicio.css';

const Inicio = () => {

  return (
    <div className="container inicio-space-bottom ">

      <div className="c1">
        <div className="type">Autogestión</div>
        </div>
      <br/>
      <div className="c2">
        <div className="type2">Licencias de</div>
      </div>
      <br/>
      <div className="c3">
        <div className="type3">Aprendizaje</div>
      </div>
     
      <div className="rocket">
        <div className="rocket-body">
          <div className="body"></div>
          <div className="fin fin-left"></div>
          <div className="fin fin-right"></div>
          <div className="window"></div>
        </div>
        <div className="exhaust-flame"></div>
        <ul className="exhaust-fumes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="star">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

    </div>
    
  );
};

export default Inicio;
