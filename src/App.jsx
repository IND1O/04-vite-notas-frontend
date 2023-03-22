import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompTable } from "./components/CompTable";
import { CompFormulario } from "./components/CompFormulario";
import { CompError404 } from "./components/CompError404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompTable />} />
          <Route path="/add" element={<CompFormulario />} />
          <Route path="/edit/:id" element={<CompFormulario />} />
          <Route path="*" element={<CompError404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
