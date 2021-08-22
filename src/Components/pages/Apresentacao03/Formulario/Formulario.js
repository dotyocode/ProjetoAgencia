import React from "react";
import "./Formulario.css";

const Formulario = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Seu nome" />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Endereço de e-mail"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Numero de celular"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nome da empresa"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formulario;
