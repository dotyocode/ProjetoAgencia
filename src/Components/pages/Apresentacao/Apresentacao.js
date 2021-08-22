import React, { useEffect } from "react";
import "./Apresentacao.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Apresentacao = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="page03">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <h3 data-aos="fade-right" className="infoApre">
              Agência de Marketing Digital Vencedora do Prêmio. Nossas campanhas
              produzem resultados, não apenas impressões.
            </h3>
            <p data-aos="fade-right" className="btnCon2">
              Continue Lendo >
            </p>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div>
              <img
                data-aos="fade-left"
                className="imgGrp"
                src="/imgs/grupo01.jpg"
                alt="photoDesc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
