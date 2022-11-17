import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Carrousel from './components/carousel/Carrousel';
import SectionImg1 from './components/sectionImg/SectionImg1';
import SectionImg2 from "./components/sectionImg/SectionImg2";
import SectionImg3 from "./components/sectionImg/SectionImg3"

const App = () => {
    return (
      <>
        <Nav />
        <Carrousel />
        <SectionImg1 />
        <SectionImg2 />
        <SectionImg3/>
        <Footer />
      </>
    );
};

export default App;