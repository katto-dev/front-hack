import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="col-12">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="../rocket.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/licencias">
                Licencias
              </Nav.Link>
              <Nav.Link as={Link} to="/solicitudes">
                Solicitudes
              </Nav.Link>
              <Nav.Link as={Link} to="/estadisticas">
                Estadisticas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
