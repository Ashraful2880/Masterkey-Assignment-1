import React from 'react';
import Advertiser from '../Advertiser/Advertiser';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import About from './About';
import Bannar from './Bannar';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Bannar />
            <Advertiser />
            <About />
            <Testimonial />
            <Dashboard />
        </div>
    );
};

export default Home;