import React from "react";
import "./AboutUs.css";
import CardStaff from "./CardStaff";

const Datos = [
    {
        id: 1,
        initials: "TL",
        name: "Marlon TL",
        stack: "Team Leader",
        paragraph1:
            "Antes de elegir a Frodo, Marlon fué la primera opción para llevar el anillo a Mordor.",

        Fotography:
            "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
    },
    {
        id: 2,
        initials: "LG",
        name: "Leandro Gutierrez",
        stack: "Full stack Developer",
        paragraph1: "Primero Lele, después Messi, Maradona y Pelé",

        Fotography:
            "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
    },
    {
        id: 3,
        initials: "VB",
        name: "Vicente Bayúgar",
        stack: "Full stack developer",
        paragraph1: "Este niño que nació adulto es un Master Front Racer IV",

        Fotography:
            "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
    },
    {
        id: 4,
        initials: "EB",
        name: "Esneider Barrera",
        stack: "Full stack developer",
        paragraph1:
            "En colombia hay proyecto de ley para incluir en la bandera la imagen de una persona que se llama Esneider Barrera",

        Fotography:
            "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
    },
    {
        id: 5,
        initials: "AR",
        name: "Andres Rubio",
        stack: "Full stack developer",
        paragraph1:
            "Cuando las dudas se acercan a la realidad, el hombre que las resuelve es Andres Rubio",

        Fotography:
            "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
    },

    {
        id: 6,
        initials: "PV",
        name: "Pablo Vieyra",
        stack: "Full stack developer",
        paragraph1:
            "A veces los problemas no se resuelven con varias soluciones, pero todas tienen el mismo nombre: Pablo Vieyra",

        Fotography:
            "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
    },
];

const AboutUs = () => {
    return (
        <div>
            <section className="container-about">
                <div className="ContainerTitle">
                    <h2 className="TitleAbout">Sobre Nosotros</h2>
                    <h3 className="ContenidoAbout">
                        {" "}
                        Somos un equipo de desarrollo web que está llamando la atención en el mundo de la programación. 
                        Conocidos como el "S2-10-M Team", nosotros nos encargamos de crear soluciones que sean efectivas y que sean fáciles de usar.
                        
                    </h3>
                </div>
            </section>
            <section className="container-about">
                <h1 className="TitleAbout" style={{ color: "#14213D" }}>
                    {" "}
                    Nuestro equipo
                </h1>
            </section>
            <div className="container-Cards">
                {Datos.map((Dato) => (
                    <CardStaff key={Dato.id} Date1={Dato}></CardStaff>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
