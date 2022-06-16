import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div style={{ background: "rgba(2,0,36,1)" }}>
      <div className="footer">
        <div className="sobreNos">
          <h2 to="/login" style={{ color: "#e5e5e5" }}>
            Sobre Nosotros
          </h2>
          <section className="seccion">
            <div className="divsLinks">
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Sobre Nosotros
              </h3>
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Nuestros Servicios
              </h3>
            </div>
            <div className="divsLinks">
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Contactanos
              </h3>
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Compañia
              </h3>
            </div>
          </section>
        </div>
        <div className="compañia">
          <h2 to="/login" style={{ color: "#e5e5e5" }}>
            Compañia
          </h2>
          <section className="seccion">
            <div className="divsLinks">
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Asociados
              </h3>
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Terminos de uso
              </h3>
            </div>
            <div className="divsLinks">
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Privacidad
              </h3>
              <h3 to="/login" style={{ color: "#e5e5e5" }}>
                Contacto
              </h3>
            </div>
          </section>
        </div>
      </div>

      <h5 style={{ textAlign: "center", color: "#e5e5e5" }}>
        Todos los derechos reservados por NoCountry - S2-G10
      </h5>
    </div>
  );
};

export default Footer;
