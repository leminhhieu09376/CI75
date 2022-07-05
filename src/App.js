import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from "./component/homePage/Home";
import Docs from "./component/homePage/Docs";
import About from "./component/homePage/About";
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
