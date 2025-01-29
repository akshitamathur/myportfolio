import Root from "../routes/root";
import Footer from "../components/footer";
import {Container, Col, Row} from "react-bootstrap";
import ProjectBoard from "../components/projectboard";

function Projects() {
  

  return (
    <>
      <Root />
      <div className="section mt-5">
        <div className="ctabackground">
          <h1 className="h1Heading mb-5 animate__animated animate__flipInX animate__delay-1s">
            Projects
          </h1>
          <Container>
            <Row>
              <Col md={4}>
                <ProjectBoard projectId={0}></ProjectBoard>
              </Col>
              <Col md={4}>
                <ProjectBoard projectId={1}></ProjectBoard>
              </Col>
              {/* <Col md={4}>
                <JobBoard jobId={5}></JobBoard>
              </Col> */}
            </Row>
          </Container>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Projects;
