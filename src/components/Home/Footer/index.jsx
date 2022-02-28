import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import f8 from '../../../img/f8.png';
import w3 from '../../../img/w3.png';
import es from '../../../img/es.png';
import './style.scss'
Footer.propTypes = {
    
};

function Footer(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="slide">
        <h2>Các trang web học lập trình yêu thích</h2>
        <Slider {...settings}>
          <div>
            <a href="https://fullstack.edu.vn/" target="f8">
                <img className="slide__img"  src={f8} alt="f8" />
            </a>
          </div>
          <div>
          <a href="https://www.w3schools.com/" target="w3">
                <img className="slide__img"  src={w3} alt="w3" />
            </a>
          </div>
          <div>
          <a href="https://www.youtube.com/c/EasyFrontend" target="es">
                <img className="slide__img"  src={es} alt="es" />
            </a>
          </div>
         
          
        </Slider>
      </div>
    );
}

export default Footer;