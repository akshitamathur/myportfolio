import Root from "../routes/root";
function Projects() {
  const title = "Projects page";

  return (
    <>
      <Root />
      <div className="section mt-5">
        <div className="ctabackground">
          <h2 className="mb-5">{title}</h2>
        </div>
      </div>
    </>
  );
}

export default Projects;
