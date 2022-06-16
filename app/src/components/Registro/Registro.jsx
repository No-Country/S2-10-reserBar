import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [respuestaBack, setRespuestaBack] = useState();
  const navigate = useNavigate();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const last_name = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await axios
      .post("https://reserbar-api.herokuapp.com/api/users/register", {
        name,
        last_name,
        email,
        password,
      })
      .then((res) => {
        setRespuestaBack(res.data.msg);
      })
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          navigate("/login");
        }, "3000")
      );
  };

  return (
    <div className="fondoAzul">
      <div className="contenedorLogin">
        <div className="formulario">
          <form className="cajaLogin" onSubmit={handleSubmit}>
            <h1 style={{ color: "white" }}>Registro</h1>
            <div>
              <input
                type="text"
                id="nombre"
                name="nombre"
                ref={nameRef}
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                type="text"
                id="apellido"
                name="apellido"
                ref={lastNameRef}
                placeholder="Apellido"
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                ref={emailRef}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                ref={passwordRef}
                placeholder="Contraseña"
              />
            </div>
            <div>
              <button type="submit">Registrarse</button>
            </div>
            <div className="irARegistro">
              {respuestaBack ? <p>{respuestaBack}</p> : null}
            </div>
          </form>
        </div>
        <div className="divFantasma"></div>
      </div>
    </div>
  );
};

export default Registro;
