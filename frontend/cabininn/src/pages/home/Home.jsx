import React from "react";
import CarrouselAll from "../../components/carousel/CarrouselAll";
import HeaderAll from "../../components/header/HeaderAll";
import SectionImg1 from "../../components/sectionImg/SectionImg1";
import SectionImg2 from "../../components/sectionImg/SectionImg2";
import SectionImg3 from "../../components/sectionImg/SectionImg3";

const Home = ({setsearching, searching, search}) => {
  return (
    <>
      <HeaderAll setsearching={setsearching}
        searching={searching} search={search} />
      <CarrouselAll />
      <SectionImg2 />
      <SectionImg1 />
      <SectionImg3 />
      
    </>
  );
};

export default Home;
