import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Signin.scss';

class SignIn extends Component {
  state = {
    login: '',
    password: '',
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.signIn({
      login: this.state.login,
      password: this.state.password,
    });
  };

  onChange = (event, propertyName) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form
          className="ui large form"
          onSubmit={ this.onSubmit }
        >
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  name="login"
                  placeholder="Login"
                  value={ this.state.login }
                  onChange={ e => this.onChange(e, 'login') }
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={ this.state.password }
                  onChange={ e => this.onChange(e, 'password') }
                />
              </div>
            </div>
            <button type="submit" className="ui fluid large teal submit button">
              Sign in
            </button>
          </div>
        </form>

        <div className="ui message">
          New to Us ? <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    );
  }
}

export default SignIn;

SignIn.propTypes = {
  signIn: PropTypes.func,
};
