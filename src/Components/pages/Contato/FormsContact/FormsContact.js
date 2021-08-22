import React, { useEffect } from "react";
import "./FormsContact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormsContact = () => {
  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const validationFormContact = yup.object().shape({
    nome: yup
      .string()
      .required("O seu nome é obrigatorio")
      .max(50, "Máximo de caracteres permitidos é 50"),
    email: yup
      .string()
      .required("O e-mail é obrigatorio")
      .max(50, "Máximo de caracteres permitidos é 50"),
    celular: yup
      .string()
      .required("O numero de celular é obrigatorio")
      .max(11, "O máximo de caracteres é 11"),
    empresa: yup
      .string()
      .required("O nome da empresa é obrigatorio")
      .max(100, "Máximo de caracteres permitidos é 100"),
    mesg: yup
      .string()
      .required("a menssagem é obrigatoria")
      .max(500, "Máximo de caracteres permitidos é 500"),
  });

  //On Submit
  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };

  function handleClick() {
    setModal(true);
    setTimeout(() => {
      setModal(null);
    }, 3000);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationFormContact),
  });

  return (
    <div className="formsContact">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div data-aos="fade-right" className="pt1">
              <h3 className="h3Forms">Vamos bater um papo?</h3>
              <p className="paragrafoForms2">
                Envie sua mensagem, vamos conversar sobre a sua empresa!
              </p>

              <h3 className="h3Forms">Nosso e-mail:</h3>
              <p className="paragrafoForms2">agencia@agenciateste.com.br</p>

              <h3 className="h3Forms">Endereço:</h3>
              <p className="paragrafoForms2">
                Rua: Fulano de Tal, sala 05, Ed. João Fulano - Centro, Viçosa -
                MG
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="col-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="formularios2">
              <div className=" divForm">
                <input
                  type="text"
                  name="nome"
                  {...register("nome")}
                  className="formField2"
                  placeholder="Seu nome"
                />
                <p className="error-message">{errors.nome?.message}</p>
              </div>
              <div className="form-group divForm">
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className="formField2"
                  placeholder="Endereço de e-mail"
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>

              <div className=" divForm">
                <input
                  type="text"
                  name="celular"
                  {...register("celular")}
                  className="formField2"
                  placeholder="Numero de celular"
                />
                <p className="error-message">{errors.celular?.message}</p>
              </div>
              <div className="form-group divForm">
                <input
                  type="text"
                  className="formField2"
                  name="empresa"
                  {...register("empresa")}
                  placeholder="Nome da empresa"
                />
                <p className="error-message">{errors.empresa?.message}</p>
              </div>

              <div className="form-group divForm">
                <textarea
                  className="formField3"
                  name="mesg"
                  {...register("mesg")}
                  rows="10"
                  cols="50"
                  placeholder="Escreva sua mensagem"
                ></textarea>
                <p className="error-message">{errors.mesg?.message}</p>
              </div>

              <button className="linksbtns4">Entre em Contato</button>

              {modal ? (
                <p className="mensagemSuccess2" data-aos="fade-left">
                  Enviado com sucesso
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsContact;
