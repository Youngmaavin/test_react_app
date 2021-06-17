import React from 'react';
import './content.css';
import About from './About';
import Events from './Events';
import Fishing from './Fishing';
import Houses from './Houses';
import Intro from './Intro';
import Prices from './Prices';
import Slider from './Slider';
import Footer from './Footer';

const Content = (props) => {
    return (
        <div className='main'>
            <Intro />
            <div className='content'>
                <About />
                <Houses />
                <Fishing />
                <Events />
                <Prices />
                <Slider apidata={props.apidata} />
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Content;
