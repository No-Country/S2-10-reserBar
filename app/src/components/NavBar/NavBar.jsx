import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

const NavBar = () => {
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
                            INICIAR SESIÓN
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr></hr>
        </>
    );
};

export default NavBar;
