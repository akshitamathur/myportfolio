import Root from "../routes/root";
import Footer from "../components/footer";
import { Container, Col, Row } from "react-bootstrap";

function Connect() {
  // const title = "Connect page";

  return (
    <>
      <Root />
      <div className="section mt-5">
        <div className="ctabackground">
          <h1 className="h1Heading mb-5 animate__animated animate__flipInX animate__delay-1s">
            Connect
          </h1>
          <Container>
            <Row>
              <Col md={6}>
              <iframe
                width="100%"
                height="500"
                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAMkZ5mxgUzuWc_6RaGgEWFXeC7MgxUMxc&center=43.6425672,-79.3877005&zoom=17&maptype=satellite">
              </iframe>
              </Col>
              <Col md={6}>
                <h2 className="text-center">Thanks for visiting!</h2>
                <h4 className="text-center">Questions? Comments? Suggestions?</h4>

                
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Connect;
