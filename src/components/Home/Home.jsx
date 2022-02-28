import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Action from './Action';
import Footer from './Footer';
Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="container">
            <Header></Header>
            <div className="action row">
                <Action></Action>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;