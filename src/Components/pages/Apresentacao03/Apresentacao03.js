import React, { useEffect } from "react";
import "./Apresentacao03.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Apresentacao03 = () => {
  const [modal, setModal] = React.useState(false);

  //React Hook Form
  //validacao yup
  const validationForm = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationForm),
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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="page05">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="formTitle">
              Faça parceria com uma agência digital de sucesso.
            </h1>
            <p className="formParagrafo">
              Deixe-nos seus dados e entraremos em contato para discutir!
            </p>
            {/* Formulario */}
            <form onSubmit={handleSubmit(onSubmit)} className="formularios">
              <div className=" divForm">
                <input
                  type="text"
                  name="nome"
                  {...register("nome")}
                  className="formField"
                  placeholder="Seu nome"
                />
                <p className="error-message">{errors.nome?.message}</p>
              </div>
              <div className="form-group divForm">
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  className="formField"
                  placeholder="Endereço de e-mail"
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className=" divForm">
                <input
                  type="text"
                  name="celular"
                  {...register("celular")}
                  className="formField"
                  placeholder="Numero de celular"
                />
                <p className="error-message">{errors.celular?.message}</p>
              </div>
              <div className="form-group divForm">
                <input
                  type="text"
                  name="empresa"
                  {...register("empresa")}
                  className="formField"
                  placeholder="Nome da empresa"
                />
                <p className="error-message">{errors.empresa?.message}</p>
              </div>
              {modal ? (
                <p className="mensagemSuccess" data-aos="fade-up">
                  Enviado com sucesso
                </p>
              ) : null}
              <button className="linksbtns4">Enviar Informações</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao03;
