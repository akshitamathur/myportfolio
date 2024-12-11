import Root from "../routes/root";
import JobBoard from "../components/jobboard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";

function Experience() {
  // const content = Data.work;

  return (
    <>
      <Root />

      <div className="section mt-5">
        <div className="">
          <h1 className="h1Heading mb-5 animate__animated animate__flipInX animate__delay-1s">
            Experience
          </h1>
          <Container>
            <Row>
              <Col md={4}>
                <JobBoard jobId={0}></JobBoard>
              </Col>
              <Col md={4}>
                <JobBoard jobId={1}></JobBoard>
              </Col>
              <Col md={4}>
                <JobBoard jobId={2}></JobBoard>
              </Col>
              <Col md={2}></Col>
              <Col md={4}>
                <JobBoard jobId={3}></JobBoard>
              </Col>
              <Col md={4}>
                <JobBoard jobId={4}></JobBoard>
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

export default Experience;
