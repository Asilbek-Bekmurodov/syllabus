import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
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
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
