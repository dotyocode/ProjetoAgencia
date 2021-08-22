import React from "react";
import "../../../App.css";
import HeroSection from "../../HeroComponent/HeroSection";
import Apresentacao from "../Apresentacao/Apresentacao";
import Apresentacao02 from "../apresentacao02/Apresentacao02";
import Apresentacao03 from "../Apresentacao03/Apresentacao03";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Apresentacao />
      <Apresentacao02 />
      <Apresentacao03 />
    </>
  );
};

export default Home;
