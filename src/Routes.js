// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import SignUpForm from './signupform';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="Login" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Sign-up" component={SignUpForm} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;