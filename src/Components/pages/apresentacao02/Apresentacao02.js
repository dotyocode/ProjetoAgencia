import React from "react";
import { Link } from "react-router-dom";
import "./Apresentacao02.css";

const Apresentacao02 = () => {
  return (
    <div className="page04">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xl-6 controle">
            <p className="paragrafoStyle01">
              AUDITORIA GRATUITA DE ESPECIALIZAÇÃO DE MARKETING DIGITAL
            </p>
            <h1 className="infoStyle01">Já utiliza marketing digital?</h1>
            <p className="paragrafoStyle02">
              Faça com que nossa experiente equipe examine sua estratégia de
              marketing digital existente, com uma análise aprofundada de seus
              gastos com mídia paga.
            </p>
            <Link className="linksbtns3" to="/contato">
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao02;
