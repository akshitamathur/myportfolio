import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/css/root.css";

function Root() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          
          expand={expand}
          className="mb-3 styling animate__animated animate__fadeInDown"
        >
          <Container fluid>
            <Navbar.Brand href="/"><img src="src/assets/icons/Logo.png" height="50"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  AKSHITA MATHUR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="styling">
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/connect">Connect</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Root;
