import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BgComponentServico.css";

const BgComponentServico = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade" className="bgs2">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 data-aos="fade-down" className="contact">
              Serviços
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgComponentServico;
