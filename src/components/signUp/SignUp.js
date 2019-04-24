import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Signup.scss'

import toastr from 'toastr';
import 'toastr/build/toastr.css';

class SignUp extends Component {
  state = {
    login: '',
    password: '',
    password2: '',
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.password !== this.state.password2) {
      return toastr.warning('Passwords are not equal', 'Warning');
    }

    this.props.signUp({
      login: this.state.login,
      password: this.state.password,
      token: true,
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
        <form className="ui large form" onSubmit={ this.onSubmit }>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  name="login"
                  placeholder="login"
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
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  type="password"
                  name="password2"
                  placeholder="Repeat Password"
                  value={ this.state.password2 }
                  onChange={ e => this.onChange(e, 'password2') }
                />
              </div>
            </div>
            <button
              type="submit"
              className="ui fluid large teal submit button"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="ui message">
          Already have an account? <NavLink to="/signin">Sign In</NavLink>
        </div>
      </div>
    );
  }
}

export default SignUp;

SignUp.propTypes = {
  signUp: PropTypes.func,
};
