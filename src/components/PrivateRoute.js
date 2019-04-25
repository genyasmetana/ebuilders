import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <Route
      { ...rest }
      render={ props => {
        return user && user.token
          ? <Component user={ user } { ...props } />
          : <Redirect to="/signin" />
      } } />
  );
}

export default PrivateRoute;
