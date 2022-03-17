import { Button } from "react-bootstrap";
const Formulario = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Licencia: Solitadas</h1>
        </div>
        <div className="col-12">Solicitudes: 1</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 pb-2">
          <Button>Aceptar</Button>
        </div>
        <div className="col-12 col-md-6 pb-2">
          <Button>Rechazar</Button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
