import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search/search";
import University from "./pages/university/university";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<University />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
