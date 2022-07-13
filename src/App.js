import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "./pages/signUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/signIn";
import Home from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
