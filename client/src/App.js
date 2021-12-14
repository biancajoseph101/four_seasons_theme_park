import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RideDetails from './pages/RideDetails';
import SubmitReview from './components/SubmitReview';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          path="/rides/details/:rideId"
          render={(props) => <RideDetails {...props} />}
        />
        {/* <Route path="/reviews" component={SubmitReview} /> */}
      </Switch>
    </div>
  );
}

export default App;
