import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

const NavBar = () => {


const tokenUsuario = useSelector(state=>state.token.token) || localStorage.getItem("token")


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
            {tokenUsuario ?
            (
               <NavLink to="/user" className="navLink negrita">
              MI PERFIL</NavLink>
              ):
              (
                <NavLink to="/login" className="navLink negrita">
              INICIAR SESIÓN</NavLink>
               
              )
            }
             
          </li>
        </ul>
      <hr></hr>
      </div>
    </>
  );
};

export default NavBar;
