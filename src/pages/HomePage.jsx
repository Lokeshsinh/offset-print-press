import React from 'react'
import Home from '../componets/Home/Home';
import WhatPrint from '../componets/Home/WhatPrint';
import HomeAbout from '../componets/Home/HomeAbout';
import HomeProducts from '../componets/Home/HomeProducts';

function HomePage() {
    return ( 
        <>
        <Home />
        <WhatPrint />
        <HomeAbout />
        <HomeProducts />
        </>
     );
}

export default HomePage;