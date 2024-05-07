// import { useState } from "react";

import "./assets/css/App.css";
import Root from "./routes/root";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Root />
      <div className="col-6 title">
        <h1>Home Page</h1>
      </div>
    </>
  );
}

export default App;
