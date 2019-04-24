import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Carousel from '../carousel/Carousel';
import Footer from '../footer/Footer';
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

export default HomeComponent;

HomeComponent.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};
