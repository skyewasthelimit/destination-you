import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>
    <div className="App">
      <Navbar />
      
    </div>
    </Router>
  );
}

export default App;
