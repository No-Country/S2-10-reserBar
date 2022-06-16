import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./barRegister.css";

const Registro = () => {
  const [respuestaBack, setRespuestaBack] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const locationRef = useRef();
  const photosRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const descriptionRef = useRef();
  const veganRef = useRef();
  const capacityRef = useRef();

  //   useEffect(() => {}, [respuestaBack]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const location = locationRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const country = countryRef.current.value;
    const capacity = capacityRef.current.value;
    const description = descriptionRef.current.value;
    const photos = photosRef.current.files;
    const vegan = veganRef.current.checked;

    console.log(vegan);

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

    console.log(vegan);

    setLoader(true);
    await axios
      .post(
        "https://reserbar-api.herokuapp.com/api/bares/register",
        formData,
        config
      )
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
            className="cajaLogin cajaRegistro"
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
                id="password"
                autoComplete="false"
                name="password"
                ref={passwordRef}
                placeholder="Contraseña"
              />
            </div>
            <div>
              <input
                type="text"
                id="location"
                name="location"
                ref={locationRef}
                placeholder="Dirección"
              />
            </div>
            <div>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                ref={cityRef}
                placeholder="Ciudad"
              />
            </div>
            <div>
              <input
                type="text"
                id="state"
                name="state"
                ref={stateRef}
                placeholder="Provincia o Estado"
              />
            </div>
            <div>
              <input
                type="text"
                id="country"
                name="country"
                ref={countryRef}
                placeholder="País"
              />
            </div>
            <div>
              <input
                type="number"
                id="capacity"
                name="capacity"
                ref={capacityRef}
                placeholder="Capacidad"
              />
            </div>
            <div>
              <input
                type="text"
                id="description"
                name="description"
                ref={descriptionRef}
                placeholder="Descripción"
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
            <div className="vegan">
              <input
                type="checkbox"
                id="vegan"
                name="vegan"
                ref={veganRef}
                defaultChecked={false}
                // onChange={handleOnChange}
              />
              <label id="vegan">Vegano</label>
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
