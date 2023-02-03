import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './page/Home';
import Landing from './page/Landing';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
      </Routes> 
    </Router>
  );
}

export default App;
