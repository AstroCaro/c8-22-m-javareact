import React from 'react';


import Footer from "./components/footer/Footer";

import SectionImg1 from './components/sectionImg/SectionImg1';
import SectionImg2 from "./components/sectionImg/SectionImg2";
import SectionImg3 from "./components/sectionImg/SectionImg3"

import CarrouselAll from './components/carousel/CarrouselAll';
import HeaderAll from './components/header/HeaderAll';
import NavBarAll from './components/navbar/NavBarAll';


const App = () => {
    return (
        <div>
            <NavBarAll />
            <HeaderAll />
            <CarrouselAll />
            <SectionImg1 />
            <SectionImg2 />
            <SectionImg3 />
            <Footer />
        </div>
    );
};

export default App;