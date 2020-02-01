import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import NotFound from '../views/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
