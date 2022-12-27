import React from 'react';
import map from "../assets/Rectangle 56.png";

const GoogleMap = () => {
    return (
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <img src={map}/>
        </div>
    );
};

export default GoogleMap;