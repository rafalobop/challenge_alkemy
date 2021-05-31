import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home';
import Equipo from './pages/Equipo';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <div className="background">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/equipo" component={Equipo} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
