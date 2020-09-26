import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LogIn} exact />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default Routes;
