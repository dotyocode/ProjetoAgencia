import React from "react";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="hero-container">
      <video
        data-aos="fade"
        className="video"
        src="/videos/video2.mp4"
        autoPlay
        loop
        muted
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-sm-12 ">
            <div className="info02">
              <h1 data-aos="fade-right" className="titulo2">
                ERROR 404
              </h1>
              <p data-aos="fade-right" className="paragrafo2">
                Página não encontrada!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
