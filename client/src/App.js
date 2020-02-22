import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Routes from './components/routing/Routes';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
