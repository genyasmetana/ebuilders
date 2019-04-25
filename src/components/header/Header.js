import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <span className="header-user-details">
        { props.userName.login }, &nbsp;
      </span>
      <span>
        Welcome to our Site
      </span>
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.shape({
    login: PropTypes.string.isRequired,
  }),
};

export default Header;
