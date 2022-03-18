import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
const Abm = () => {
  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire("Excelente!", "Has cargado un nuevo Proovedor!", "success");
  };
  return (
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="offset-3 col-6">
          <Form onSubmit={handleClick}>
            <InputGroup className=" mt-5 mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Titulo:
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aia-describedby="inputGroup-sizing-default"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Descripcion:
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aia-describedby="inputGroup-sizing-default"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                URL:
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aia-describedby="inputGroup-sizing-default"
                required
              />
            </InputGroup>
            <Form.Select className="mb-5" aria-label="Default select example">
              <option>Categorias</option>
              <option value="1">Frontend</option>
              <option value="2">Backend</option>
              <option value="3">React</option>
            </Form.Select>
            <Form.Group controlId="formFile" className="mt-5 mb-5">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
            <div className="d-grid gap-2 mb-3">
              <Button type="submit" variant="primary" size="lg">
                Confirmar
              </Button>
              <Button type="reset" variant="secondary" size="lg">
                Limpiar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Abm;
