import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
  <section className>
    <div className="container text-center text-md-start mt-5">
    <div className="footer">
            <h6 className="text-uppercase fw-bold mb-4">
                Contact
            </h6>
          <div className="footer__sell">
            <div>
                <p>
                    <i className="fas fa-home me-3" /> Quảng Nam, Việt Nam</p>
            </div>
            <div><p>
                <i className="fas fa-envelope me-3" />
                anvo8222@gmail.com
            </p></div>
            <div><p><i className="fas fa-phone me-3" />0387967435</p></div>
          </div>
    </div>
    </div>
  </section>
</footer>
    );
}

export default Footer;