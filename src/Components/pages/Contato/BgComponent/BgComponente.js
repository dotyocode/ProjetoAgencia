import React, { useEffect } from "react";
import "./BgComponente.css";
import Aos from "aos";
import "aos/dist/aos.css";

const BgComponente = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade" className="bgs">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 data-aos="fade-down" className="contact">
              Contato
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgComponente;
