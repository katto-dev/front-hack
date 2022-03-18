import { Button, InputGroup, FormControl } from "react-bootstrap";
import { TechContext } from "../../context/TechContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Formulario = () => {
  const { licencia } = useContext(TechContext);

  const [mail, setMail] = useState('')

  const handleChange = (event) => {
    setMail(event.target.value)
  }
  // console.log(licencia[0]._id)

  const handleLic = async () => {
    try {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vendorId: licencia[0]._id,
          mail: mail,
        }),
      };
      const response = await fetch(
        "https://backend-hack.herokuapp.com/api/v1/applications",
        params
      );
      const data = await response.json();
      if (response.status === 200) {
        Swal.fire(
          "Exitoso!",
          "Nos estaremos Comunicando a la brevedad...",
          "success"
        );
      } else {
        Swal.fire("Error!", "No pudimos crear tu solicitud...", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "No pudimos crear tu solicitud...", "error");
    }
  };

  return (
    <>
      {licencia.map((item) => (
        <div className="container" key={item._id}>
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
                  <InputGroup.Text>Email:</InputGroup.Text>
                  <FormControl aria-label="First name" onChange={handleChange}/>
                </InputGroup>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-md-6 pb-2">
              <Button onClick={() => handleLic()}>Aceptar</Button>
            </div>
            <div className="col-12 col-md-6 pb-2">
              <Button as={Link} to={"/licencias"}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Formulario;
