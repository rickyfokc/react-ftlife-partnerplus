import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./page/LandingPage";
import LoginPage from "./page/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
