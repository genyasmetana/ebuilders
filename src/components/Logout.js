import { Component } from 'react';
import PropTypes from 'prop-types';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }

  render() {
    return null;
  }
}

export default Logout;

Logout.propTypes = {
  logout: PropTypes.func,
};
