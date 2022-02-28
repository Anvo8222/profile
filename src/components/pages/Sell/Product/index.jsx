import React, { useState } from 'react';
import PropTypes from 'prop-types';
import products from '../../../../API/products.json'
import ProductList from '../ProductList';
Product.propTypes = {
    
};

function Product(props) {
    const productList=products.products;
    
    
    return (
        <React.Fragment>
            <ProductList productList={productList}></ProductList>
        </React.Fragment>
    );
}

export default Product;