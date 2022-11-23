import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBarAll from "../components/navbar/NavBarAll";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Results from "../pages/results/Results";
import NotFound from "../pages/notfound/NotFound";
import Pays from "../pages/pays/Pays";
import ReservationByOne from "../pages/reservation/ReservationByOne";


const IndexRouter = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NavBarAll setModalShow={setModalShow} modalShow={modalShow} />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/results" element={ <Results/> } />
        <Route path="/reservation/:id" element={ <ReservationByOne /> } />
        <Route path="/pays" element={<Pays />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default IndexRouter;
