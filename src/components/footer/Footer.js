import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <button
        className="button button--large"
        onClick={ () => props.history.push('/logout') }
      >
        Logout
      </button>
    </footer>
  );
};

Footer.propTypes = {
  history: PropTypes.object,
};

export default Footer;

