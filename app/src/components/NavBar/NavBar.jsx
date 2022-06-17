import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
  const barData = useSelector((state) => state.user.data);

  const tokenUsuario = useSelector((state) => state.user.token);

  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="logoRBCelu">
          <img src={logo} alt="logo" width={75} height={75} />
        </NavLink>
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

          <NavLink to="/" className="logoRB">
            <img src={logo} alt="logo" width={75} height={75} />
          </NavLink>
          <li>
            <NavLink to="/reservar" className="navLink negrita">
              RESERVAR
            </NavLink>
          </li>
          <li>
            {tokenUsuario ? (
              barData.location ? (
                <NavLink
                  to={`/dashboard/${barData._id}`}
                  className="navLink negrita"
                >
                  {barData.name.toUpperCase()}
                </NavLink>
              ) : (
                <NavLink to="/user" className="navLink negrita">
                  {barData.name.toUpperCase()}
                </NavLink>
              )
            ) : (
              <NavLink to="/login" className="navLink negrita">
                INICIAR SESIÓN
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  );
};

export default NavBar;
