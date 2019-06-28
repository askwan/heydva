import React from 'react';
import { Router, Switch,Redirect } from 'dva/router';

import Page1 from '@/routes/Page1';
import VertRoute from './VertRoute';
import Login from './routes/login'
import Staging from './routes/staging'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        
        {/* <VertRoute path="/" exact component={IndexPage} /> */}
        
        <VertRoute path='/staging' component={Staging} />
        <VertRoute path="/page" component={Page1} />
        <VertRoute path="/login" component={Login} />
        <Redirect from='/' to='/staging' />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
