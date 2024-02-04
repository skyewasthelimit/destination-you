import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>
    <div className="App">
      <Navbar />
      <Home />
    </div>
    </Router>
  );
}

export default App;