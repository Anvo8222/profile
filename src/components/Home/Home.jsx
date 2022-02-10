import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Action from './Action';
Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="container">
            <Header></Header>
            <div className="action row">
                <Action></Action>
            </div>
        </div>
    );
}

export default Home;