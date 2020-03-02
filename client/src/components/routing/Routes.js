import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Dashboard from '../dashboard/Dashboard';

const Routes = () => {
  return (
    <Fragment>
      <div id='wrapper'>
        <Sidebar />

        <div id='main-panel'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default Routes;
