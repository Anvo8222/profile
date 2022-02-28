import React  from 'react';
import  {  useState } from 'react';
import Catelogy from './Catelogy';
import Filter from './Filter';
import Footer from './Footer';
import Header from './Header';
import Product from './Product';
import Slide from './Slide';
Sell.propTypes = {
    
};


function Sell(props) {
    

    return (
        <div className='container'>
            <Header></Header>
            
                <div className="row">
                    <Product></Product>
                </div>
            <Footer></Footer>
            
        
        </div>
    );
}

export default Sell;