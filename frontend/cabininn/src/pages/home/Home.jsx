import React from "react";
import Header from "../../components/header/HeaderAll";
import Carrousel from "../../components/carousel/CarrouselAll";
import SectionImg1 from "../../components/sectionImg/SectionImg1";
import SectionImg2 from "../../components/sectionImg/SectionImg2";
import SectionImg3 from "../../components/sectionImg/SectionImg3";

function Home() {
  return (
    <>
      <Header />
      <Carrousel />
      <SectionImg1 />
      <SectionImg2 />
      <SectionImg3 />
    </>
  );
}

export default Home;
