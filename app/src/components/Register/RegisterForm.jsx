import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          password: "",
          lastname: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion lastname
          if (!valores.lastname) {
            errores.lastname = "Por favor ingresa un Segundo Nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastname)) {
            errores.lastname =
              "El LastName solo puede contener letras y espacios";
          }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }
          // Validacion password
          if (!valores.password) {
            errores.password = "Por favor ingresa un Password";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(
              valores.password
            )
          ) {
            errores.password =
              "Puede tener entre 8 a 15 caracteres, 1 Mayus,1 Min, 1 digito, 1 Caracter Especial y sin espacios";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
          console.log(valores);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <h1 style={{ color: "white" }}>Register</h1>
              <label htmlFor="nombre">Nombre</label>
              <Field type="text" id="nombre" name="nombre" placeholder="John" />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="lastname">LastName</label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" Doe"
              />
              <ErrorMessage
                name="lastname"
                component={() => <div className="error">{errors.lastname}</div>}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="text"
                id="password"
                name="password"
                placeholder="***********"
              />
              <ErrorMessage
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
