import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './style.scss'
ProductMenu.propTypes = {
    
};

function ProductMenu(props) {
    let params = useParams();
    console.log("params:",params);
    return (
        <div className="productMenu">
            <ul className="productMenu__group">
                <li className="productMenu__item">
                    <NavLink className="productMenu__link" to={`${params.id}/description`} exact>Description</NavLink>
                </li>
                <li className="productMenu__item">
                    <NavLink className="productMenu__link" to={`${params.id}/additional`} exact>Additional Information</NavLink>
                </li>
                <li className="productMenu__item">
                    <NavLink className="productMenu__link" to={`${params.id}/reviews`} exact>Reviews</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default ProductMenu;