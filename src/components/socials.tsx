// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../assets/json/resume.json";
import "../assets/css/socials.css";


function Socials() {
  // const [count, setCount] = useState(0);
const profile = Profile;
  return (
    <>
      {/* <h1 className="text-center">SOCIALS</h1> */}
      <Container className="text-center">
        <Row>
          <Col className="p-2" xs={6} md={4}>
            <a href={profile.socials[0].url}><i className="bi bi-instagram"></i></a>
          </Col>
          <Col className="p-2" xs={6} md={4}>
          <a href={profile.socials[1].url}><i className="bi bi-linkedin"></i></a>
          </Col>
          <Col className="p-2" xs={6} md={4}>
          <a href={profile.socials[2].url}><i className="bi bi-github"></i></a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Socials;
