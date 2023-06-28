// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import SignUpForm from './signupform';
import FileList from './FileList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="Login" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Sign-up" component={SignUpForm} />
          <Route exact path="/file-list" component={FileList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;