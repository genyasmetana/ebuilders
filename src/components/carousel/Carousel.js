import React from 'react';
import './Сarousel.scss';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <input className="carousel-checkbox" type="radio" id="carousel-1" name="carousel" hidden defaultChecked />

        <figure className="carousel-item">
          <img
            alt="first"
            className="carousel-img"
            src="http://fakeimg.pl/2000x800/f06292/fff/?text=Without"
          />
        </figure>

        <input className="carousel-checkbox" type="radio" id="carousel-2" name="carousel" hidden />
        <figure className="carousel-item">
          <img
            alt="second"
            className="carousel-img"
            src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript"
          />
        </figure>

        <input className="carousel-checkbox" type="radio" id="carousel-3" name="carousel" hidden />
        <figure className="carousel-item">
          <img
            alt="third"
            className="carousel-img"
            src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel"
          />
        </figure>

        <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
        <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
        <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
        <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
        <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
        <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>

        <ol className="carousel-list">
          <li className="carousel-indicator">
            <label htmlFor="carousel-1" className="carousel-bullet">•</label>
          </li>
          <li className="carousel-indicator">
            <label htmlFor="carousel-2" className="carousel-bullet">•</label>
          </li>
          <li className="carousel-indicator">
            <label htmlFor="carousel-3" className="carousel-bullet">•</label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
