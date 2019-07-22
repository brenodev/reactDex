import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom Components
import Dashboard from './components/layout/Dashboard'
import NavBar from './components/layout/NavBar/NavBar';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
