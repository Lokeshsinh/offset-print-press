import React from 'react'
import Home from '../componets/Home/Home';
import WhatPrint from '../componets/Home/WhatPrint';
import HomeAbout from '../componets/Home/HomeAbout';
import HomeProducts from '../componets/Home/HomeProducts';
import HomePrint from '../componets/Home/HomePrint';
import HomeSays from '../componets/Home/HomeSays';

function HomePage() {

    return ( 
        <>
       
        <Home />
        <WhatPrint />
        <HomeAbout />
        <HomeProducts />
        <HomePrint />
        <HomeSays />
        </>
     );
}

export default HomePage;