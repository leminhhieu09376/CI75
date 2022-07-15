
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AddToDo from "./pages/addTodo";
import Planned from "./pages/planned";
function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/addtodo" element={<AddToDo />} />
        <Route path="/planned" element={<Planned />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
