import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const [respuestaBack, setRespuestaBack] = useState();
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const locationRef = useRef();
    const photosRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const location = "prueba1";
        const city = "prueba1";
        const state = "prueba1";
        const country ="prueba1";
        const capacity = 24;
        const description = "prueba1";
        const photos = photosRef.current.files;
        const vegan = false;
        console.log(photos);

        const formData = new FormData()
        let files = Object.values(photos);
        for(let i=0; i< files.length; i++){
            formData.append(files[i].name, files[i], files[i].name);
          console.log(files[i]);
          console.log(formData);
        }

   


        await axios
            .post("http://localhost:3005/api/bares/register", {
                name,
                password,
                email,
                location,
                city,
                state,
                country,
                capacity,
                description,
                formData,
                vegan,
            })
            .then((res) => {
                setRespuestaBack(res.data.msg);
                console.log(respuestaBack);
            })
            .catch((err) => console.log(err))
            // .finally(
            //     setTimeout(() => {
            //         navigate("/login");
            //     }, "3000")
            // );
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
                                multiple= {true}
                                ref={photosRef}
                               
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
