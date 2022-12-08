import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Pays from "../pages/pays/Pays";
import ReservationByOne from "../pages/reservation/ReservationByOne";
import NavBarAll from "../components/navbar/NavBarAll";
import Results from "../pages/results/Results";
import UserLoged from "../pages/user/UserLoged";
import NotFound from "../pages/notfound/NotFound";
import axios from "axios";
import FooterMobile from "../components/footer/FooterMobile";


const IndexRouter = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalshow1, setmodalshow1] = useState(false)

  const [searching, setsearching] = useState("");
  const [capture, setcapture] = useState();
  const [hotels, sethotels] = useState([]);

  const [log, setlog] = useState(Boolean(localStorage.getItem('session')))
  const [user,setuser] = useState('')
  const [idus, setidus] = useState(0)
// datos para el pago

const [dataPago, setdataPago] = useState({})


  useEffect(() => {
    axios
      .get("https://cabininn-backend-production.up.railway.app/hotels")
      .then((res) => sethotels(res.data))
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
        setmodalshow1={setmodalshow1}
        modalshow1={modalshow1}
        setsearching={setsearching}
        search={search}
        searching={searching}
        log={log}
        setlog={setlog}
        user={user}
        setuser={setuser}
        setidus={setidus}
      />
      <Routes>
        <Route path="/" element={<Home setsearching={setsearching}
        searching={searching} search={search} />} />
        <Route
          path="/results/:country"
          element={<Results capture={capture} hotels={hotels} setsearching={setsearching}
          searching={searching} search={search}/>}
        />
        <Route path="/reservation/:id" element={<ReservationByOne idus={idus} setidus={setidus} setsearching={setsearching}
        searching={searching} search={search}/>} />
        <Route path="/pays" element={<Pays />} />
        <Route path="/user" element={<UserLoged/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FooterMobile setModalShow={setModalShow} setmodalshow1={setmodalshow1}/>
    </div>
  );
};

export default IndexRouter;
