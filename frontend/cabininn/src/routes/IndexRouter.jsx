import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import NavBarAll from "../components/navbar/NavBarAll";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Results from "../pages/results/Results";
import NotFound from "../pages/notfound/NotFound";
import Pays from "../pages/pays/Pays";
import ReservationByOne from "../pages/reservation/ReservationByOne";
import axios from "axios";


const IndexRouter = () => {
  const [modalShow, setModalShow] = useState(false);

  const [searching, setsearching] = useState("");
  const [capture, setcapture] = useState();
  const [hotels, sethotels] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/638601547966e84526cf3d75")
      .then((res) => sethotels(res.data.record))
      .catch((err) => console.log(err));
  }, []);

  const search = () => {
    const hotelbyCountry = hotels.filter(
      (hotel) => hotel.address.countryName === searching
    );
    setcapture(hotelbyCountry);
    // return <Link to="./results"> </Link>;
  };

  return (
    <div>
      <NavBarAll
        setModalShow={setModalShow}
        modalShow={modalShow}
        setsearching={setsearching}
        search={search}
        searching={searching}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:country" element={<Results capture={capture} hotels={hotels} />} />
        <Route path="/reservation/:id" element={<ReservationByOne />} />
        <Route path="/pays" element={<Pays />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default IndexRouter;
