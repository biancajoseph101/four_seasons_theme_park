import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RideDetails from './pages/RideDetails';
import Nav from './components/Nav';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          path="/rides/details/:rideId"
          render={(props) => <RideDetails {...props} />}
        />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
