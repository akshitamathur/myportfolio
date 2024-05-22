import Root from "../routes/root";
function Blog() {
  const title = "Blog page";

  return (
    <>
      <Root />
      <div className="section mt-5">
        <div className="ctabackground">
          <h1 className="h1Heading mb-5 animate__animated animate__flipInX animate__delay-1s">
            Blog
          </h1>
        </div>
      </div>
    </>
  );
}

export default Blog;
