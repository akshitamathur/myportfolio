import Root from "../routes/root";

function Connect() {
  const title = "Connect page";

  return (
    <>
      <Root />
      <div className="section mt-5">
        <div className="ctabackground">
          <h1 className="h1Heading mb-5 animate__animated animate__flipInX animate__delay-1s">
            Connect
          </h1>
        </div>
      </div>
    </>
  );
}

export default Connect;
