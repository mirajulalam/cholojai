import React from 'react';
import Navbar from '../shared/Navbar';
import Banner from './Banner';
import GoogleMap from './GoogleMap';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <GoogleMap/>
        </div>
    );
};

export default Home;