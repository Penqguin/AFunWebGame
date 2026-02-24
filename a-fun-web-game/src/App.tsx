import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Lobby from './pages/lobby';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<div>Join Page</div>} />
        <Route path="/:lobbyCode" element={<Lobby />} />
      </Routes>
    </Router>
  );
}

export default App;
