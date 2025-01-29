import { useState, useEffect } from "react";
import Data from "./assets/json/resume.json";
import "./assets/css/App.css";
import Root from "./routes/root";
import Footer from "./components/footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import Socials from "./components/socials";


function App() {

  const [currentTitle, setCurrentTitle] = useState(0);
  const dataContent = Data.basics;
  const jobTitles = Data.basics.titles;

  // const element = jobTitles
  //   .sort(() => Math.random() - Math.random())
  //   .find(() => true);

  // const titles=["Sharepoint", "Web", "FrontEnd", "Shopify", "vue", "React"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            const num = Math.floor(Math.random() * jobTitles.length);
            setCurrentTitle(num);
        }, 4000)
        
        return () => clearInterval(intervalId);
    }, [])

   
 

  return (
    <>
      <Root />

      <Container>
        <Row>
          <Col
            className="mainImage text-center animate__animated animate__fadeIn animate__delay-1s"
            md
            lg={5}
          >
            <Image
              className="mainImageSize"
              alt="Me! In Banff, with the rocky mountains in the background."
              src="./assets/imgs/home/mainImage2.jpeg"
              fluid
              
            />
          </Col>
          <Col
            className="p-4 animate__animated animate__fadeIn animate__delay-2s"
            md
            lg={7}
          >
            <h1 className="h1Heading mb-5">{dataContent.name.toUpperCase()}</h1>
            <h3 className="title mb-5">
              {/* <span className="orange">{(element?.name)} </span> */}
              {<span key={Math.random()} className="orange animate__animated animate__backOutDown animate__delay-3s">{jobTitles[currentTitle].name} </span>}
              <br/>Developer
            </h3>
            <p className="mb-5">{dataContent.summary}</p>
            <Socials />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
