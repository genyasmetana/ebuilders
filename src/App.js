import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import HomeComponent from './components/home/HomeComponent';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import './App.scss';
import './defaultCss/buttons.scss';

import toastr from 'toastr';
import 'toastr/build/toastr.css';

class App extends Component {
  constructor(props) {
    super(props);

    toastr.options.positionClass = 'toast-top-center';

    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
    }

    this.state = {
      user,
    };
  }

  signIn = user => {
    let result = null;
    let savedUser = localStorage.getItem('user');

    if (savedUser) {
      if (JSON.stringify(user) === savedUser) {
        result = true;
      } else {
        result = false;
      }
    }

    switch (result) {
      case true:
        savedUser = JSON.parse(savedUser);
        toastr.success(`Successfully signed in as ${ savedUser.login }`, 'Success');
        this.setState({ user: savedUser }, () => {
          this.props.history.push('/');
        });
        break;

      case false:
        toastr.error('Wrong login and password combination', 'Error');
        break;

      default:
        toastr.error('No such login and password combination', 'Error');
    }
  };

  signUp = user => {
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({ user }, () => {
      toastr.clear();
      toastr.success('You have successfully registered!', 'Success');
      this.props.history.push('/');
    });
  };

  logout = () => {
    localStorage.removeItem('user');
    this.setState({ user: null }, () => {
      toastr.success('You have successfully logged out!', 'Success');
      this.props.history.push('/signin');
    });
  };

  render() {
    return (
      <div className="page-container">
        <Switch>
          <PrivateRoute
            path="/"
            exact
            component={ HomeComponent }
            user={ this.state.user }
          />
          <Route
            path="/signin"
            render={
              () => <SignIn signIn={ this.signIn } />
            }
          />
          <Route
            path="/signup"
            render={
              () => <SignUp signUp={ this.signUp } />
            }
          />
          <Route
            path="/logout"
            render={
              () => <Logout logout={ this.logout } />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

