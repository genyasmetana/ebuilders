import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import './HomeComponent.scss';

class HomeComponent extends Component {
  render() {
    return (
      <div className="home-container">
        <Header userName={ this.props.user } />
        <Carousel />
        <Footer history={ this.props.history } />
      </div>
    );
  }
}

HomeComponent.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};

export default HomeComponent;
