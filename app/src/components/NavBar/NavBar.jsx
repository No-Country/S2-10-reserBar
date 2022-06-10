import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
  const tokenUsuario = useSelector((state) => state.token.token);
  return (
    <>
      <div className="navbar">
        <ul className="navLinks">
          <li>
            <NavLink to="/" className="navLink negrita">
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navLink negrita">
              QUIENES SOMOS
            </NavLink>
          </li>

          <NavLink to="/">
            <img src={logo} alt="logo" width={75} height={75} />
          </NavLink>
          <li>
            <NavLink to="/reservar" className="navLink negrita">
              RESERVAR
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navLink negrita">
              {tokenUsuario ? "MI PERFIL" : "INICIAR SESIÓN"}
            </NavLink>
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  );
};

export default NavBar;
