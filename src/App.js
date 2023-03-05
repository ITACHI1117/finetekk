import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/animate" element={<Swiping />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
