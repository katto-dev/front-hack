import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="col-12">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="../hackaton-8.png"
              width="170"
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
            <Navbar.Text>
              <button 
                  className='btn btn-outline-info'
                  onClick={handleLogout}
              >
                  Logout
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
