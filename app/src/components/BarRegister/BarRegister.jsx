import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [respuestaBack, setRespuestaBack] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const locationRef = useRef();
  const photosRef = useRef();

  //   useEffect(() => {}, [respuestaBack]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const location = "asdasdss";
    const city = "asdasdss";
    const state = "asdasdss";
    const country = "asdasdss";
    const capacity = 24;
    const description = "asdasdss";
    const photos = photosRef.current.files;
    const vegan = false;
    console.log(photos);

    let files = Object.values(photos);

    let formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("capacity", capacity);
    formData.append("description", description);
    formData.append("vegan", vegan);
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    setLoader(true);
    await axios
      .post("http://localhost:3005/api/bares/register", formData, config)
      .then((res) => {
        setRespuestaBack(res.data.msg);
        setLoader(false);
      })
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          navigate("/login");
        }, "10000")
      );
  };

  return (
    <div className="fondoAzul">
      <div className="contenedorLogin">
        <div className="formulario">
          <form
            id="dataFormulario"
            className="cajaLogin"
            onSubmit={handleSubmit}
          >
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
              <input
                type="file"
                id="photos"
                name="photos"
                multiple={true}
                ref={photosRef}
              />
            </div>
            <div>
              <button type="submit">Registrarse</button>
            </div>
            <div className="irARegistro">
              {respuestaBack ? <p>{respuestaBack}</p> : null}
            </div>
            <div className="irARegistro">
              {loader ? <p>Cargando...</p> : null}
            </div>
          </form>
        </div>
        <div className="divFantasma"></div>
      </div>
    </div>
  );
};

export default Registro;
