import React from 'react'
import Footer from "./components/footer/Footer";
import SectionImg1 from './components/sectionImg/SectionImg1';
import SectionImg2 from "./components/sectionImg/SectionImg2";
import SectionImg3 from "./components/sectionImg/SectionImg3"

function componentsToMerge() {
  return (
    <>
        <SectionImg1 />
        <SectionImg2 />
        <SectionImg3/>
        <Footer />
      </>
  )
}

export default componentsToMerge