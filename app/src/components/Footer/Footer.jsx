import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div style={{ background: "rgba(2,0,36,1)" }}>
      <div className="footer">
        <div className="sobreNos">
          <h3 to="/login" style={{ color: "#e5e5e5" }}>
            Sobre Nosotros
          </h3>
          <section className="seccion">
            <div className="divsLinks">
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Sobre Nosotros
              </h4>
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Nuestros Servicios
              </h4>
            </div>
            <div className="divsLinks">
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Contactanos
              </h4>
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Compañia
              </h4>
            </div>
          </section>
        </div>
        <div className="compañia">
          <h3 to="/login" style={{ color: "#e5e5e5" }}>
            Compañia
          </h3>
          <section className="seccion">
            <div className="divsLinks">
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Asociados
              </h4>
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Terminos de uso
              </h4>
            </div>
            <div className="divsLinks">
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Privacidad
              </h4>
              <h4 to="/login" style={{ color: "#e5e5e5" }}>
                Contacto
              </h4>
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
