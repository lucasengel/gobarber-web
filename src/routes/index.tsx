import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LogIn} exact />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default Routes;