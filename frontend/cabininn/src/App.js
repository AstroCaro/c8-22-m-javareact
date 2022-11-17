import React from 'react';
import CarrouselAll from './components/carousel/CarrouselAll';
import HeaderAll from './components/header/HeaderAll';
import NavBarAll from './components/navbar/NavBarAll';


const App = () => {
    return (
        <div>
            <NavBarAll />
            <HeaderAll />
            <CarrouselAll />
        </div>
    );
};

export default App;