import React from 'react';
import Advertiser from '../Advertiser/Advertiser';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import About from './About';
import Bannar from './Bannar';

const Home = () => {
    return (
        <div>
            <Bannar />
            <Advertiser />
            <About />
            <Dashboard />
        </div>
    );
};

export default Home;