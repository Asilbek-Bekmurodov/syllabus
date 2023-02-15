import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import University from "./pages/university/university";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<University />} />
      </Routes>
    </div>
  );
}

export default App;
