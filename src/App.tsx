import { useState } from "react";

import "./App.css";
import Root from "./routes/root";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Root />
      <h4>Home Page</h4>
    </>
  );
}

export default App;
