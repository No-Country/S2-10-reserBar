import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./LoginForm.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [tokenUsuario, setTokenUsuario] = useState();

  const login = async (valores) => {
    console.log(valores);

    const password = valores.password;
    const email = valores.email;

    await axios
      .post("http://localhost:3005/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        setTokenUsuario(res.data.token);
        //Puse en guarda el token para que quede post logueo
        localStorage.setItem("token", res.data.token);
        console.log(tokenUsuario);

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fondoAzul">
      <div className="contenedorLogin">
        <Formik
          initialValues={{
            // nombre: "",
            email: "",
            password: "",
          }}
          validate={(valores) => {
            let errores = {};

            // Validacion nombre
            // if (!valores.nombre) {
            //   errores.nombre = "Por favor ingresa un nombre";
            // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            //   errores.nombre =
            //     "El nombre solo puede contener letras y espacios";
            // }

            // Validacion email
            if (!valores.email) {
              errores.email = "Por favor ingresa un email electrónico";
            } else {
              //   !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email;
            }
            // ) {
            //   errores.email =
            //     "El email solo puede contener letras, numeros, puntos, guiones y guion bajo.";
            // }
            // Validacion password
            if (!valores.password) {
              errores.password = "Por favor ingresa un Password";
            } else {
              //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(
              valores.password;
            }
            // ) {
            //   errores.password =
            //     "Puede tener entre 8 a 15 caracteres, 1 Mayus,1 Min, 1 digito, 1 Caracter Especial y sin espacios";
            // }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            console.log(valores);
            // handleSubmit(valores);
            // setDatosLogin(valores);
            login(valores);
            resetForm();
            console.log("Formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="formulario">
              <div className="cajaLogin">
                <h1 style={{ color: "white" }}>Login</h1>
                {/* <div>
              <h1 style={{ color: "white" }}>Login</h1>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div> */}
                <div>
                  {/* <label htmlFor="email">email</label> */}
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
                <div>
                  {/* <label htmlFor="password">Password</label> */}
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="error">{errors.password}</div>
                    )}
                  />
                </div>
                <div>
                  <button type="submit">Enviar</button>
                  {formularioEnviado && (
                    <p className="exito">Formulario enviado con exito!</p>
                  )}
                </div>
                <div>
                  <p className="irARegistro">
                    Si aún no tienes cuenta{" "}
                    <Link to="/registro" className="linkRegistro">
                      regístrate aqui
                    </Link>
                  </p>
              
                  <p className="irARegistro">
                    Para registrar tu bar{" "}
                    <Link to="/barRegistro" className="linkRegistro">
                      hacelo aqui!
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="divFantasma"></div>
      </div>
    </div>
  );
};

export default LoginForm;
