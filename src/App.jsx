import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {routes.map((r, index) => (
          <Route key={index} path={r.path} element={<r.element />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
