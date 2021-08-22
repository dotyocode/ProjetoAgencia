import React, { useEffect } from "react";
import "./HeroSection.css";
import "../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero-container">
      <video
        data-aos="fade"
        className="video"
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-sm-12 ">
            <div className="info01">
              <h1 data-aos="fade-right" className="titulo">
                Nós capacitamos marcas e influenciar o público.
              </h1>
              <p data-aos="fade-right" className="paragrafo">
                Campanhas de marketing digital lindamente elaboradas.
              </p>
              <div data-aos="fade-left" className="btnHero">
                <Link className="linksbtns" to="/contato">
                  Entre em Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
