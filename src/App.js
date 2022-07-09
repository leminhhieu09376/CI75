import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


import Login from "./component/homeWork9/Login";
import Home from "./component/homeWork9/Home";
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homwpage" element={<Home />} />

      </Routes>
    </BrowserRouter >

  );
}

export default App;
