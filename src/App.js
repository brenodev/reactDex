import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// Custom Components
import Dashboard from './components/layout/Dashboard'
import NavBar from './components/layout/NavBar/NavBar';
import Pokemon from './components/Pokemon'

//Assets
import backgroundImage from './assets/images/pattern.png'
// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Dashboard />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
