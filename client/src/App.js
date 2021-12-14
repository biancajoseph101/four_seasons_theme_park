import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewForm from './components/SubmitReview'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route path = "/review" component={(props) => <ReviewForm {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
