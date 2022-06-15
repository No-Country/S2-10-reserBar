import React from "react";
import "./AboutUs.css";
import CardStaff from "./CardStaff";

const Datos = [
  {
    id:1,
    name: "Marlon",
    stack: "Tl",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    Fotography:
      "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
  },
  {
    id:2,
    name: "Lele",
    stack: "Super Developer",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    Fotography:
      "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
  },
  {
    id:3,
    name: "Vicents",
    stack: "Full stack developer",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    Fotography:
      "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
  },
  {
    id:4,
    name: "Esneider",
    stack: "Full stack developer",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    Fotography:
      "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
  },
  {
    id:5,
    name: "Andres",
    stack: "Full stack developer",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    Fotography:
      "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
  },

  {
    id:6,
    name: "Pablo Vieyra c:",
    stack: "Full stack developer",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    Fotography:
      "https://ca.slack-edge.com/T032Y55Q6VC-U033QG3RU1F-1e2fb8078ce2-512",
  },
];

const AboutUs = () => {
  return (
    <div>
      <section className="container-about">
        <div className="ContainerTitle">
          <h1 className="TitleAbout">Sobre Nosotros</h1>
          <h3 className="ContenidoAbout">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quasi assumenda eligendi numquam deleniti iusto illo ratione
            consectetur. Delectus modi in possimus dolorem maxime fugit
            molestias debitis placeat velit qui?
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
         
            <CardStaff key={Dato.id}  Date1={Dato}></CardStaff>
          
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
