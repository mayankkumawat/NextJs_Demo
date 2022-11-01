import React from "react";
import { Banner } from "../../components/Banner";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import ResourcesLanding from "../../components/ResourcesLanding";
import TalkTo from "../../components/TalkTo";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ResourcesLanding />
      <TalkTo />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
