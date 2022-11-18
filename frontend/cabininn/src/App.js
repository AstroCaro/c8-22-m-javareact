import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/NavBarAll';
import Home from './pages/home/Home'
import Footer from "./components/footer/Footer";

const App = () => {
    return (
      <>
        <Nav />
        <Home/>
        <Footer />
      </>
    );
};

export default App