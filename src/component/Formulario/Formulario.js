import { Button, InputGroup, FormControl } from "react-bootstrap";
import { TechContext } from "../../context/TechContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
  const { licencia } = useContext(TechContext);
  const handleLic = () => {
    Swal.fire(
      "Exitoso!",
      "Nos estaremos Comunicando a la brevedad...",
      "success"
    );
  };

  return (
    <>
      {licencia.map((item) => (
        <div className="container" key={item.id}>
          <div className="row mb-4 mt-4">
            <div className="col-12 mb-4">
              <h1>Licencia: {item.title}</h1>
              <h2>Stock: {item.stock}</h2>
              <div className="col-12 mb-4">
                <h2>Solicitudes: 1</h2>
              </div>
            </div>
            <div className="row">
              <div className="offset-3 col-6">
                <InputGroup className="mb-3">
                  <InputGroup.Text>Nombre y Apellido:</InputGroup.Text>
                  <FormControl aria-label="First name" />
                  <FormControl aria-label="Last name" />
                </InputGroup>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 pb-2">
              <Button onClick={() => handleLic()}>Aceptar</Button>
            </div>
            <div className="col-12 col-md-6 pb-2">
              <Button>Rechazar</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Formulario;
