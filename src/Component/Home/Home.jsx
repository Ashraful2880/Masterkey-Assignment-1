import React from 'react';
import Advertiser from '../Advertiser/Advertiser';
import Publisher from '../Publisher/Publisher';
import About from './About';
import Bannar from './Bannar';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Bannar />
            <Advertiser />
            <Publisher />
            <About />
            <Testimonial />
        </div>
    );
};

export default Home;