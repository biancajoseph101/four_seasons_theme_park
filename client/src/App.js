import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
