import Root from "../routes/root";
import Footer from "../components/footer";
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
          <h4 className="text-center">Coming Soon-ish</h4>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blog;
