// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/socials.css";

function Socials() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-center">SOCIALS</h1> */}
      <Container className="text-center">
        <Row>
          <Col className="p-2" xs={6} md={4}>
            <i className="bi bi-instagram"></i>
          </Col>
          <Col className="p-2" xs={6} md={4}>
            <i className="bi bi-facebook"></i>
          </Col>
          <Col className="p-2" xs={6} md={4}>
            <i className="bi bi-linkedin"></i>
          </Col>
          <Col className="p-2" xs={6} md={4}>
            <i className="bi bi-github"></i>
          </Col>
          <Col className="p-2" xs={6} md={4}>
            <i className="bi bi-twitter"></i>
          </Col>
          <Col className="p-2" xs={6} md={4}>
            <i className="bi bi-discord"></i>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Socials;
