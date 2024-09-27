import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <h1>Hello from React!</h1>
      </Route>
      {/* Add more routes as needed */}
    </Switch>
  </Router>
);

export default App;
