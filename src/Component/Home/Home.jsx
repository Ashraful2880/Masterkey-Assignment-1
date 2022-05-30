import React from 'react';
import Advertiser from '../Advertiser/Advertiser';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Bannar from './Bannar';

const Home = () => {
    return (
        <div>
            <Bannar />
            <Advertiser />
            <Dashboard />
        </div>
    );
};

export default Home;