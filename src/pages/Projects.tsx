import Root from "../routes/root";
import ProjectBoard from "../components/projectboard";
import Footer from "../components/footer";
function Projects() {
  const title = "Projects page";

  return (
    <>
      <Root />
      <div className="section mt-5">
        <div className="ctabackground">
          <h1 className="h1Heading mb-5 animate__animated animate__flipInX animate__delay-1s">
            Projects
          </h1>
          <ProjectBoard></ProjectBoard>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;
