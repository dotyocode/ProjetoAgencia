import React, { useEffect } from "react";
import "./Cards.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="page02  ">
      <div className="container  ">
        <div className="row ">
          <div data-aos="fade-up" className="col-sm-3 col-xl-3  colunaH">
            <img alt="photoDesc" className="imgs" src="/imgs/pesquisar.png" />
            <h3 className="tituloCard">Pesquisa</h3>
            <p className="paragrafoCard">
              Faça sua marca aparecer quando clientes em potencial estiverem
              procurando o que sua empresa oferece. Isso geralmente oferece o
              melhor retorno direto em marketing digital hoje; com os
              multiplicadores geralmente em dois dígitos.
            </p>
          </div>
          <div data-aos="fade-down" className="col-sm-3 col-xl-3 colunaH">
            <img alt="photoDesc" className="imgs" src="/imgs/social.png" />
            <h3 className="tituloCard">Social</h3>
            <p className="paragrafoCard">
              Campanhas poderosas de mídia social que fazem com que seu
              público-alvo pare de navegar pelo feed e interaja com sua marca.
              Produzindo resultados mensuráveis para empresas: sejam chamadas
              telefônicas, leads ou compras.
            </p>
          </div>
          <div data-aos="fade-up" className="col-sm-3 col-xl-3 colunaH">
            <img alt="photoDesc" className="imgs" src="/imgs/design.png" />
            <h3 className="tituloCard">Design</h3>
            <p className="paragrafoCard">
              Uma parte essencial do kit de ferramentas de marketing geral, você
              precisa para administrar um negócio de sucesso no mercado atual.
              Ampliar suas mensagens principais, sucessos e marca é uma
              engrenagem fundamental de sua estratégia geral.
            </p>
          </div>
          <div data-aos="fade-down" className="col-sm-3  col-xl-3 colunaH">
            <img alt="photoDesc" className="imgs" src="/imgs/website.png" />
            <h3 className="tituloCard">Website</h3>
            <p className="paragrafoCard">
              A campaign's conversion rate can often be boosted by some basic
              website adjustments. Our internal web development team works
              closely with our marketing departments to make sure client
              websites are optimised for results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
