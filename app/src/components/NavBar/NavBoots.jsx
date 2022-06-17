import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";

const NavBoots = () => {
    const barData = useSelector((state) => state.user.data);

    const tokenUsuario = useSelector((state) => state.user.token);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a
                        href="#!"
                        className="navbar-brand logoBootSmall "
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <img
                            className=" logoRB logoBootSmall "
                            src={logo}
                            alt="logo"
                            width={35}
                            height={35}
                        />
                    </a>
                    <button
                        className="navbar-toggler botonMargin"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse my-2 "
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav d-flex justify-content-between  ">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link navLink negrita"
                                >
                                    INICIO
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className="nav-link navLink negrita"
                                >
                                    QUIENES SOMOS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="logoRB logoBoot">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        width={75}
                                        height={75}
                                    />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/reservar"
                                    className="nav-link navLink negrita"
                                >
                                    RESERVAR
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {tokenUsuario ? (
                                    barData.location ? (
                                        <NavLink
                                            to={`/dashboard/${barData._id}`}
                                            className="nav-link navLink negrita"
                                        >
                                            {barData.name.toUpperCase()}
                                        </NavLink>
                                    ) : (
                                        <NavLink
                                            to="/user"
                                            className="nav-link navLink negrita"
                                        >
                                            {barData.name.toUpperCase()}
                                        </NavLink>
                                    )
                                ) : (
                                    <NavLink
                                        to="/login"
                                        className="nav-link navLink negrita"
                                    >
                                        INICIAR SESIÓN
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr></hr>
        </>
    );
};

export default NavBoots;
