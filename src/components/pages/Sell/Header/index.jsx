import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { useSelector } from 'react-redux';
import { cartItemCountSelector } from '../../Cart/selector';
import { Link, useNavigate } from 'react-router-dom';

Header.propTypes = {
    
};

function Header(props) {
  const cartItemCount=useSelector(cartItemCountSelector)

  const navigate = useNavigate();
  const handleCartClick=()=>{
    navigate('/sell/cart')
  }
    return (
            <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container header__menu">
      <Link to="/" className="navbar-brand">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Áo nữ<i className="icon fa-solid fa-angle-down"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Quần nữ<i className="icon fa-solid fa-angle-down"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Váy đầm<i className="icon fa-solid fa-angle-down"></i></a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">Blog<i className="icon fa-solid fa-angle-down"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đăng nhập</a>
          </li>

          <li className="nav-item cart">
            <div className="nav-link" onClick={handleCartClick}>
              <i class="cart__icon fa-solid fa-cart-arrow-down"></i>
              <span className="cart__cart"> Giỏ hàng </span>
              <span className="cart__quanliti">({cartItemCount})</span>
            </div>
          </li>


        </ul>
      </div>
    </div>
  </nav>
 
  
</div>
        
      
    );
}

export default Header;