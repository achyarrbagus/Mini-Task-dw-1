import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profil from "./pages/Profil";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profil />} />
          <Route path="/profil/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
